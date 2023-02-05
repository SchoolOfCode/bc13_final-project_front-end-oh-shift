import { use, useEffect, useState } from "react"
import YouTube from "react-youtube"
import Badge from '../Badge/Badge.js'
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete"

export default function TableRow({handleDelete, handleSave, game}){
    const [confirmDeletePopUpActive, setConfirmDeletePopUpActive] = useState(false)
    const [editing, setEditing] = useState(false)
    const [hovering, setHovering] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [showEditValues, setShowEditValues] = useState(false)
    
console.log('this is game', game)

function getVideoId(){
  return game.video_rules.substring(game.video_rules.length - 11)
}


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
        setTimeout(()=>setEditing(true), 1)
        setTimeout(()=>setShowEditValues(false), 1)
      }

      //✅ 
      function confirmDeletePrompt(){
       setConfirmDeletePopUpActive(true)
       setTimeout(()=>setEditing(true), 1)
      }

      //✅ 
      function handleEditClick(){
        setShowEditValues(true)
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
        <td>
        {(editing && !confirmDeletePopUpActive) ? (
  <>
    <button className="btn btn-ghost btn-xs" onClick={handleEditClick}>
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
) :
(
  <>
    <button className="btn btn-ghost btn-xs invisible" onClick={handleEditClick}>
      <span class="material-symbols-outlined">
        edit_note
      </span>
    </button>
    <button className="btn btn-ghost btn-xs invisible" onClick={confirmDeletePrompt}>
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
        </td>
      </tr>


{/* editable values within table go here */}
{showEditValues &&
<tr>
  <td>
  </td>
  <td>
 <textarea className="w-full h-36" defaultValue={game.description}>
 </textarea>
  </td>
  <td>
  <div>
  <div className='w-full' >
  <input type="url" defaultValue={game.video_rules}>
  </input>
  <button className="btn btn-xs" onClick={()=>setShowVideo(!showVideo)}>{showVideo ? 'Hide Video' : 'Show Video'}</button>
  </div>
  <div className={showVideo? "w-max" : "w-max invisible"}>
  <YouTube
        videoId={getVideoId(game.video_rules)}
        opts={{
          height: '80%',
          width: '80%',
          playerVars: {
            autoplay: 0,
            rel: 0,
            controls: 0
          }
        }}
      />
      </div>
      </div>
  </td>
  <td>
  Info
  </td>
  <td>
  <div>
  <button className="btn btn-ghost btn-xs" onClick={handleSave}>
      <span class="material-symbols-outlined">
        save
      </span>
    </button>
  <button className="btn btn-ghost btn-xs" onClick={handleCancel}>
      <span class="material-symbols-outlined">
        cancel
      </span>
    </button>

  </div>
  </td>
</tr>}


      </>
    
    )}

