import capitaliseWord from '../../functions/capitaliseWord.js'
import Stars from '../Stars/Stars'
import { useUser } from "@auth0/nextjs-auth0/client";


export default function IndividualReview({review, handleDelete}){
  const { user} = useUser();




    return (
      
        <div>
        
          <div 
          style={{
            display:'flex',
            flexDirection:'row'
            
          }}
          >
        <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <img src={review.user_picture} alt={review.user_given_name}/>
              </div>
            </div>
              <h5>{capitaliseWord(review.user_given_name)}</h5>
              </div>
              <div 
              style={{
                display:'flex',
                flexDirection:'row',
                gap:'1rem'
              }}
              
              >
              <Stars rating={review.rating} /> 
              </div>
              <p>           
              
                {review.review_text}</p>
              {(user?.sub == review.user_id) && 
                <button className="btn btn-error btn-xs" onClick={handleDelete}>Delete Review</button>}

        </div>
    )
}