import { useEffect, useState } from 'react'
import StarRating from '../StarRating/StarRating'
import TextInput from '../TextInput/TextInput.js'
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AddReview({title, id}){
    const [rating, setRating] = useState('')
    const [reviewText, setReviewText] = useState('')
    const { user, error, isLoading } = useUser();
    console.log('this is user', user.sub)

    function handleRating(e){
        setRating(e.target.value)
    }

    function handleTextInput(e){
        setReviewText(e.target.value)
    }
    
    function handleSubmit() {
        alert(`handleSubmit called!`)
        // console.log(user)

        postReview({
            game_id: id,
            review_text: reviewText,
            rating: rating,
            user_given_name: user.given_name,
            user_picture: user.picture,
            user_id: user.sub,
        })
    }

        async function postReview(newReview){
            if (newReview) {
            console.log(`this is the new review object! ${newReview}`)}
            if (newReview) {
          await fetch('https://stokka.onrender.com/api/reviews', {
            method: 'POST',
            headers: {Accept: "application/json",
                    'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
          })
          .then(response => response.json())
.then(response => console.log(JSON.stringify(response)))}
      }



    
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