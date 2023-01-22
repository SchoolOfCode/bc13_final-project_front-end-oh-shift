import capitaliseWord from '../../functions/capitaliseWord.js'
import Stars from '../Stars/Stars'
import { useUser } from "@auth0/nextjs-auth0/client";


export default function IndividualReview({review}){
  const { user} = useUser();

  async function handleDelete(id){
    if (id) {
  await fetch(`https://stokka.onrender.com/api/reviews/${id}`, {
    method: 'DELETE',
    headers: {Accept: "application/json",
            'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))}
  else {alert('Something went wrong when trying to delete review')}
  }


    return (
        <div>
        <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <img src={review.user_picture} alt={review.user_given_name}/>
              </div>
            </div>

              <p>{capitaliseWord(review.user_given_name)}</p>
              <Stars rating={review.rating} /> {review.rating}
              <p>{review.review_text}</p>
              {(user?.sub == review.user_id) && 
                <button className="btn btn-error btn-xs" onClick={()=>handleDelete(review.review_id)}>Delete Review</button>}

        </div>
    )
}