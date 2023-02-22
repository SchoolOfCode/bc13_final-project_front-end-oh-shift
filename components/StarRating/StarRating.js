import React from 'react'

/**
 * 
 * @param {function} handleRating - Function passed down from the review component to allow user to rate the game clicking on the stars 'radio buttons'

 * @returns , visually, the 5 stars used for rating and allows the user to click on them to rate the game
 */

export default function StarRating({handleRating}){
return(
<div className="rating">
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="1" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning"  value="2" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="3" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="4" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="5" onClick={handleRating}/>
</div>)}