import capitaliseWord from "../../functions/capitaliseWord"

/**
 * it create the badges for the filter options to display in the UI once the user choose their preferences
 * @param {string} label - text of difficulties options (easy,intermediate,hard)
 * @param {function} onClick - it display the bagdes on the UI when the user click on the difficulty option he selected
 * @param {string} backgroundColor - it changes the background color of the badge based on the label string
 * @returns a styled badge and the function capitaliseWord from the homonym component to capitalise the first letter of each option
 */
export default function Badge({label, onClick, backgroundColor}){
    let icon;

    if (label == 'easy' || label == 'Easy' ) {
        backgroundColor='#50FFB1' 
    }
    else if (label == 'intermediate' || label == "Intermediate") {
        backgroundColor='#F3A712'
    }
    else if (label == 'hard' || label == 'Hard') {
        backgroundColor='#FF6201'
    }

    return(
    <span style={{backgroundColor: backgroundColor || "#f3a712", borderRadius:"5px", height:"2rem"}} className="badge w-max"
    onClick={onClick}>{capitaliseWord(label)}</span>
    )
}