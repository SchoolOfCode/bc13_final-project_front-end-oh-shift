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
            flexDirection:'row',
            gap:'1rem',
            marginBottom: '1.5rem',
            
            
          }}
          >
        <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <img src={review?.user_picture} alt={review.user_given_name}/>
              </div>
            </div>
              <h5 style={{paddingTop:'0.1rem'}}>{capitaliseWord(review.user_given_name)}</h5>
              </div>
              <div 
              style={{
                display:'flex',
                flexDirection:'row',
                gap:'1rem',
                marginBottom: '1rem'
              }}
              
              >
              <Stars rating={review.rating} /> 
              </div>

              <div style={{display:'flex', flexDirection:'row'}}>
              <p style={{marginBottom:'4rem'}}>           
              
                {review.review_text}</p>
                
              {(user?.sub == review.user_id) && 
                <button 
                 className="btn rounded btn-xs" onClick={handleDelete}>
                <span style ={{display:'flex', justifyContent:'flex-end'}} className="material-symbols-outlined">Delete</span>
                </button>}
</div>
       </div>
    )
}