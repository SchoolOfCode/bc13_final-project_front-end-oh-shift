export default function ConfirmDelete({handleCancel, handleDelete}){
    return (
        <>
<div>
<p>Are you sure you want to delete?</p>
      <button className="btn-xs btn-error" onClick={handleDelete}>Delete</button>
      <button className="btn-xs btn-warning" onClick={handleCancel}>Cancel</button>
</div>

        </>
    )
}