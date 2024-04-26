import axios from 'axios'


function loadScript(src) {

	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


function Payment({tourId}){
  const api_url = process.env.REACT_APP_API_URL;

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data =  await axios.post(
            `${api_url}/book/${tourId}`,
            
            {
              headers: { 'Content-Type': 'application/json' },
              credentials: true
            }
          ).then((t) =>
			t.data
		)
     
		console.log(data)

		const options = {
			key:  'rzp_test_oeAvpf9MwJ4OX9' ,
			currency: 'INR',
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you . Please give us some money',
			image: 'https://yandex-images.clstorage.net/9GIx83k50/d12552JWbx/hHGAiJ9sD-07WAKTOPwVuDx7O0qQVua_NBwBDAWP7wtJCfW2HAnOsavShIK-oI0DNW303cMiEUONyt5_hX0jvcA7g5CENE3udghG2XT3Eql0YT8VwAr7qWtIQgwvtfNDUx7vozV7_4KG6b6zg5TreHo_qI-WbhASg5exEJUmVf29ZsLj6UEK_h14KplF5jyPfUUjUoVLzcIvFQFqCqfOYHYM5a8jaNqBi-W6jpqL-FhQJIOTmWNMGKOqlyzgO1bErlT16OVkGtk6cimGYPI_qlhyF3SEedPCHigjdDai_XJOGuCjO1TsjK7ZppGeu8R0cxuCvoJuWge6oIoa8DtR0KxF9tDmRQrJLHgEhlfwP4h9dDVhmnDy4QIYN2UtrsJveSjrjjNq1pCh7L6Yv4X1X3AMs7m2fFIhjZyPOPsFQ8yDQcrt9EcS3g1jKpRh5BqyVXE5QZZF5-ErDjB7M77fSXIR0IUERuaWsuSVqIu31UJGE76OgHtNJaSOoSzCKVHsvVrJ7MJEEP86WwaQQv4Ym2RTA06gWe3fDxY0UQCv_3BrEMmQAXH1jK33gYSPn8FwZhqNo5dvVhOik7cf2jdT3ZZD1tbbaQj9I08-g27JJJ13VD19t17r4D0MP284uu9_fA_xmDpm5q2C3Zm4i6vYR08ciYencHQcnYmiDsAIcd2VV9738ng83CFuB6le1RuKfEY3Y4Bxx9krPhxmGJL1UFYw0aU_dPCJvvWdo7KkxkVOGYy8lVpzHIiMmSbRK3bGjkXe8vlnOt4sdgORfOQmg1VmHki7Xs_3IAM8WRqa3WduC8C1G3LyiJD3t62OpOVYZimOp4BzcBeOv5oG7Txx4INr0MLUaiH0JU8Fo3XEBa1XVi9FklfO6wozD1oUhPlSchvfviFF_JmexaOvhJ3hVEsMkZ2fWG0fgaCIPs8HR9GuZ9zW00c0-SBjBIFixh-dZmYqSKJg0MYZExB5Mr8',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				user : '',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			},     
           notes: {
             user: data.user,
             lawyer : data.lawyer
            }
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}







    return(
        <span onClick={displayRazorpay} className=" bg-white py-1 text-lg font-semibold mt-4 rounded-lg px-6" >Pay</span>
    )
}
export {Payment}