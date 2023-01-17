export default function capitaliseWord(word){
    return (word) ?
    word.charAt(0).toUpperCase() + word.slice(1) : ''
}