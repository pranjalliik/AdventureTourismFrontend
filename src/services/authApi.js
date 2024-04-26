import axios from 'axios'
//const apiUrl = 'http://localhost:5000/users/signin'
let api_url = process.env.REACT_APP_API_URL;


 export async function signin ({ email, password })  {
    try {
      const response = await axios.post(
        `${api_url}/users/signin`,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Sign-in request failed.');
    }
  };

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
 }

 export async function signup (data)  {
  console.log("hii")
  try {
   

    const response = await axios.post(
      `${api_url}/users/signup`,data
    );
    return response;
  } catch (error) {
    throw new Error('Sign-in request failed.');
  }
};

export async function signout ()  {
  try {
   

    const response = await axios.post(
      `${api_url}/users/signout`, { headers: {
        'Content-Type': 'application/json',
      },
  });
    return response;
  } catch (error) {
    throw new Error('Sign-in request failed.');
  }
};