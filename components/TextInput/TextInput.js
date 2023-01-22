export default function TextInput({placeholderText, handleTextInput, value}){
    return(
    <input type="text"
    placeholder={placeholderText ? placeholderText : 'Type here...'}
    className="input w-full max-w-xs"
    onChange={handleTextInput}
    value={value}
    />
)}