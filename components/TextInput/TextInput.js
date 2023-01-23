export default function TextInput({placeholderText, handleTextInput, value}){
    return(
        <div
        style={{
            margin:"1rem 0rem"
        }}
        >
    <input type="text"
    placeholder={placeholderText ? placeholderText : 'Type here...'}
    className="input w-full max-w-xs h-8"
    onChange={handleTextInput}
    value={value}
    />
    </div>
)}