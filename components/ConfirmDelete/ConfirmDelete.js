export default function ConfirmDelete({handleCancel, handleDelete}){
    return (<>
<div>

<div className="tooltip" data-tip="Delete">
<button className="btn btn-ghost btn-xs" onClick={handleDelete}>
      <span class="material-symbols-outlined">
        delete_forever
      </span>
    </button>
    </div>
    
    <div className="tooltip" data-tip="Cancel">
<button className="btn btn-ghost btn-xs" onClick={handleCancel}>
      <span class="material-symbols-outlined">
        cancel
      </span>
    </button>
    </div>

    <p>Are you sure you want to delete?</p>

    </div>
        </>
    )
}