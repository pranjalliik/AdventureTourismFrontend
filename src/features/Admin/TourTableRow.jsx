


function TourTableRow(tour){
    return(
    <tr >
    <td className="border border-slate-700 flex"  >
      <div style={{ backgroundImage: `url(${require(`../../images/${tour.photo}`)})` }}
      alt="" className="h-24 w-32 bg-contain bg-no-repeat mt-2 ml-2"></div>
    <div className="flex flex-col justify-center pl-3">
      {tour.name} </div></td>
    <td className="border border-slate-700 ">{tour.price}</td>
    <td className="border border-slate-700 ">{tour.manager.name}</td>
    <td className="border border-slate-700 ">
     <div className="flex">
     <span class="material-symbols-outlined">
           edit
                   </span>
        <span class="material-symbols-outlined">

                    delete
                      </span>
                    </div> </td>
  </tr>
    )
}

export {TourTableRow}