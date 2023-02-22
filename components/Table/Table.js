import { useState } from "react"
import TableRow from "../TableRow/TableRows"

export default function Table({handleDelete, handleSave, headers, games}){

  console.log('this is games', games)



  
    return(
        <>
  <table className="table table-auto w-full">
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
    <TableRow game={game} key={game.id} handleDelete={handleDelete} handleSave={handleSave}/>))
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
        </>
    )
}