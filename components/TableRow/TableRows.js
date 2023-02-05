import { use, useEffect, useState } from "react"
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete"

export default function TableRow({handleDelete, game}){
    const [confirmDeletePopUpActive, setConfirmDeletePopUpActive] = useState(false)
    const [cancelDeleteClicked, setCancelDeleteClicked] = useState(false)
    const [editing, setEditing] = useState(false)

useEffect(()=>{
  console.log('editing:', editing)
},[editing])

useEffect(()=>{
  console.log('confirmDeletePopUpActive:', confirmDeletePopUpActive)
},[confirmDeletePopUpActive])

      //✅ 
      function handleCheck(){
        console.log('handlecheck called')
        console.log('confirmdeletepopupactive', confirmDeletePopUpActive)
        console.log('editing', editing)
        !confirmDeletePopUpActive && setEditing(!editing)
        
      }

    //✅ 
    function handleCancel(){
        console.log('handlecancel called')
        setEditing(false)
        setConfirmDeletePopUpActive(false)
      }

      //✅ 
      function confirmDeletePrompt(){
        console.log('confirmingdeleteprompt called')
       setConfirmDeletePopUpActive(true)
       console.log('confirmdeletepopupactive', confirmDeletePopUpActive)
       setEditing(true)
      }


    
    return(
<>
        <tr className="bg-red-100" onClick={handleCheck}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" checked={editing} onClick={handleCheck}/>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={game.packaging_image_url} alt={game.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{game.title}</div>
            </div>
          </div>
        </td>
        <td>
          {game.location}
        </td>
        <td>{game.quantity}</td>
        <th>
        {editing && (
        confirmDeletePopUpActive? (
  <ConfirmDelete handleCancel={handleCancel} handleDelete={()=>handleDelete(game.id)}
  />
) : (
  <>
    <button className="btn btn-ghost btn-xs">
      <span class="material-symbols-outlined">
        edit_note
      </span>
    </button>
    <button className="btn btn-ghost btn-xs" onClick={confirmDeletePrompt}>
      <span class="material-symbols-outlined">
        delete
      </span>
    </button>
  </>
))}

{confirmDeletePopUpActive &&
  <ConfirmDelete handleCancel={handleCancel} handleDelete={()=>handleDelete(game.id)}
  />
}
        </th>
      </tr>
      </>
    
    )}

