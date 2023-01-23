import capitaliseWord from "../../functions/capitaliseWord"

export default function Badge({label, onClick, backgroundColor}){
    let icon;

    if (label.toLowerCase() == 'easy' ) {
        backgroundColor='#50FFB1' 
    }
    else if (label.toLowerCase() == 'intermediate' ) {
        backgroundColor='#F3A712'
    }
    else if (label.toLowerCase() == 'hard') {
        backgroundColor='#FF6201'
    }

    return(
    <span style={{backgroundColor: backgroundColor || "#f3a712", borderRadius:"5px", height:"2rem"}} className="badge w-max"
    onClick={onClick}>{capitaliseWord(label)}</span>
    )
}