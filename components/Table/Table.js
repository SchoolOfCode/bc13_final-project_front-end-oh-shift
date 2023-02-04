import { useState } from "react"

import ConfirmDelete from '../ConfirmDelete/ConfirmDelete.js'

export default function Table({headers, games}){
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  console.log('this is games', games)

  function handleCancel(){
    console.log('Canceled')
  }

  function handleDelete(){
    console.log('Deleted')
  }

  
    return(
        <>
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        {headers.map((header)=> 
            <th key={header}>{header}</th>
        )}
      </tr>
    </thead>


    <tbody>

    {games? (games.map((game)=> 
    <>
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
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
        {!deleteConfirm ? 
        <>
          <button className="btn btn-ghost btn-xs">
            <span class="material-symbols-outlined">
            edit_note
            </span>
          </button>
          <button className="btn btn-ghost btn-xs"
          onClick={()=>setDeleteConfirm(true)}>
            <span class="material-symbols-outlined">
            delete
            </span>
          </button>
          </>
          : <ConfirmDelete
            handleDelete={handleDelete}
            handleCancel={handleCancel}
          />}
        </th>
      </tr>
      </>
    ))
    :
    <p>Games loading...</p>}
      </tbody>
 
    <tfoot>
      <tr>
        <th></th>
        {headers.map((header)=> 
            <th key={header}></th>
        )}
      </tr>
    </tfoot>
    
  </table>
</div>
        </>
    )
}