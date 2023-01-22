import { useEffect, useState } from 'react'
import StarRating from '../StarRating/StarRating'
import TextInput from '../TextInput/TextInput.js'
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AddReview({title, handleRating, handleSubmit, handleTextInput}){

    const { user, error, isLoading } = useUser();
    
    return(<>
    <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Review the game</b>
        </h3>
        <StarRating handleRating={handleRating}/>
        <TextInput placeholderText={`What did you think of ${title}?`} handleTextInput={handleTextInput}/>
        <button class="btn btn-outline btn-primary">Cancel</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </>
    )
}