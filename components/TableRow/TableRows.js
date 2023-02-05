import { use, useEffect, useState } from "react"
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete"

export default function TableRow({handleDelete, game}){
    const [confirmDeletePopUpActive, setConfirmDeletePopUpActive] = useState(false)
    const [cancelDeleteClicked, setCancelDeleteClicked] = useState(false)
    const [editing, setEditing] = useState(false)
    const [hovering, setHovering] = useState(false)

useEffect(()=>{
  console.log('editing:', editing)
},[editing])

useEffect(()=>{
  console.log('confirmDeletePopUpActive:', confirmDeletePopUpActive)
},[confirmDeletePopUpActive])


      //✅ 
      function handleCheck(){
        setEditing(!editing)
      }

    //✅ 
    function handleCancel(){
        setConfirmDeletePopUpActive(false)
      }

      //✅ 
      function confirmDeletePrompt(){
       setConfirmDeletePopUpActive(true)
       setTimeout(()=>setEditing(true), 1)
      }


    
    return(
<>
        <tr onClick={handleCheck} onMouseOver={()=>setHovering(true)} onMouseOut={()=>setHovering(false)}>
        <th>
          <label>
            <input type="checkbox" className={hovering? `checkbox visible` : editing? `checkbox visible` : `checkbox invisible`} checked={editing} onClick={handleCheck}/>
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
        {(editing && !confirmDeletePopUpActive) && (
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
)}
{confirmDeletePopUpActive &&
(
  <ConfirmDelete handleCancel={handleCancel} handleDelete={()=>handleDelete(game.id)}
  />
)
}
        </th>
      </tr>








      
      </>
    
    )}

