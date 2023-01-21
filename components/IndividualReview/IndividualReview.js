import capitaliseWord from '../../functions/capitaliseWord.js'
import Stars from '../Stars/Stars'
import { useUser } from "@auth0/nextjs-auth0/client";


export default function IndividualReview({review}){
  const { user, error, isLoading } = useUser();



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
                <button className="btn btn-error btn-xs">Delete Review</button>}

        </div>
    )
}