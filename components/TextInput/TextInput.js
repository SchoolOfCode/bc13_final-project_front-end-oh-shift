export default function TextInput({placeholderText, handleTextInput}){
    return(
    <input type="text"
    placeholder={placeholderText ? placeholderText : 'Type here...'}
    className="input w-full max-w-xs"
    onChange={handleTextInput}
    />
)}