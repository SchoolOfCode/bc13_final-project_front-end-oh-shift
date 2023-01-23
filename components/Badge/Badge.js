export default function Badge({label, onClick}){
    return(
    <span style={{backgroundColor: "#f3a712", borderRadius:"5px", height:"2rem"}} className="badge w-max"
    onClick={onClick}>{label}</span>
    )
}