import { useState } from "react"
import TableRow from "../TableRow/TableRows"

export default function Table({handleDelete, headers, games}){

  console.log('this is games', games)



  
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
    <TableRow game={game} key={game.id} handleDelete={handleDelete}/>))
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