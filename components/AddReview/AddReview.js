import StarRating from '../StarRating/StarRating'
import TextInput from '../TextInput/TextInput.js'

export default function AddReview({title, handleRating, handleSubmit, handleTextInput, handleCancel, value}){

    return(<>
    <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Review the game</b>
        </h3>
        <StarRating handleRating={handleRating}/>
        <TextInput placeholderText={`What did you think of ${title}?`} handleTextInput={handleTextInput} value={value}/>
        <button class="btn btn-outline btn-primary" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </>
    )
}