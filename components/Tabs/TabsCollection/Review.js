import React, { useState, useEffect} from 'react'
import IndividualReview from '../../IndividualReview/IndividualReview'
import Link from 'next/link.js'
import AddReview from '../../AddReview/AddReview'
import { useUser } from "@auth0/nextjs-auth0/client";


function Review({title, id}) {
const [reviewData, setReviewData] = useState([]);
const [reviewUpdated, setReviewUpdated] = useState(false)
const [rating, setRating] = useState('')
const [reviewText, setReviewText] = useState('')
const { user } = useUser();

useEffect(() => {    
  async function getReviews(id){    
    await fetch(`https://stokka.onrender.com/api/reviews/${id}`, {
        header: {Accept: "application/json" }})
        .then((res)=> res.json())
        .then((res)=> setReviewData(res.payload))}
    getReviews(id)
}, [id, reviewUpdated]);

async function handleDelete(id){
  if (id) {
await fetch(`https://stokka.onrender.com/api/reviews/${id}`, {
  method: 'DELETE',
  headers: {Accept: "application/json",
          'Content-Type': 'application/json'}
})
alert('Review deleted!')
setReviewUpdated(!reviewUpdated)
}
else {alert('Something went wrong when trying to delete review')}
}

function handleRating(e){
  setRating(e.target.value)
}

function handleTextInput(e){
  setReviewText(e.target.value)
}

function handleSubmit() {
  if (!rating) {alert('Please add a star rating')}
  if (!reviewText) {alert('Please add review text')}

  if (rating && reviewText) {
  postReview({
      game_id: id,
      review_text: reviewText,
      rating: rating,
      user_given_name: user.given_name,
      user_picture: user.picture,
      user_id: user.sub,
  })
  setRating('');
  setReviewText('')
}
}

function handleCancel() {
  setRating('');
  setReviewText('')
}

  async function postReview(newReview){
      if (newReview) {
    await fetch('https://stokka.onrender.com/api/reviews', {
      method: 'POST',
      headers: {Accept: "application/json",
              'Content-Type': 'application/json'},
      body: JSON.stringify(newReview)
    })
setReviewUpdated(!reviewUpdated)}
}


  return (
    <div>
      <div
        className="card w-96 bg-base-100 shadow-xl bg-zinc-200"
        style={{
          marginBottom: "2rem",
          maxWidth: "400px",
          maxHeight: "30rem",
          overflow: 'auto',
          borderTopLeftRadius: "0px"
        }}
      >
        <div style={{padding:"32px"}}>
        <h2 className="card-title" style={{ marginBottom: "1rem" }}>
          {title}
          <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
          {reviewData[0]?.average_rating}
        </h2>
        {user ? <AddReview
        title={title}
        id={id}
        handleRating={handleRating}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        value={reviewText}
        /> : (<><p>You must be logged in to leave a review.</p>

        <button
            style={{ marginTop: "1rem", marginBottom: "3rem", alignItem:"center"}}
            className="btn btn-primary btn-outline rounded">
          <Link href="/api/auth/login">Login</Link>
          </button>
          <h4 style={{marginBottom:"1rem"}}><b>Reviews</b></h4>
          
          </>)}
        <div className='rounded'
        style={{
          backgroundColor:" rgba(255,255,255,0.5)",
          display:'flex',
          flexDirection:'column',
          padding:'1rem'

        }}
        >
            {reviewData ? reviewData?.map((review) => (
              <IndividualReview review={review} key={review.review_id} handleDelete={()=>handleDelete(review.review_id)}/>
        )) : <p>Getting reviews...</p> }
        
      </div>

        </div>
      </div>
    </div>
  )
}

export default Review