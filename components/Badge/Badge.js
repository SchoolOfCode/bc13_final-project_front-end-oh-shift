export default function Badge({label}){
    return(
    <span style={{backgroundColor: "#f3a712", borderRadius:"5px", width:"6.5rem", height:"2rem"}} className="badge">{label}</span>
    )
}