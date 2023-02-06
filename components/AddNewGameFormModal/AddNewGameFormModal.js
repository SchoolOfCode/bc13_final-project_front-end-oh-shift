import AddNewGame from '../AddNewGame/AddNewGame.js'

export default function AddNewGameFormModal(){
    return(
        <>
<input type="checkbox" id="add-new-game-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
 <AddNewGame/>
  </div>
</div>
</>
    )
}