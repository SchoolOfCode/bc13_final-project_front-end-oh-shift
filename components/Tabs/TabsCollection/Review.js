import React, { useState, useEffect} from 'react'
import {useGet} from '../../customHooks/useGet.js'
import IndividualReview from '../../IndividualReview/IndividualReview'
import Link from 'next/link.js'
import AddReview from '../../AddReview/AddReview'
import { useUser } from "@auth0/nextjs-auth0/client";

function Review({title, id}) {
const [reviewData, setReviewData] = useState([]);
const { user } = useUser();

const [response, error] = useGet(
  `https://stokka.onrender.com/api/reviews/${id}`);

useEffect(() => {
  setReviewData(response);
}, [response]);



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
        </h2>
        {user ? <AddReview title={title} id={id}/> : (<><p>You must be logged in to leave a review.</p><button><Link href="/api/auth/login">Login</Link></button></>)}
        

            {reviewData ? reviewData?.map((review) => (
              <IndividualReview review={review} key={review.review_id}/>
        )) : <p>Getting reviews...</p> }
        
      

        </div>
      </div>
    </div>
  )
}

export default Review