
export default function StarRating({handleRating}){
return(
<div className="rating">
  <input type="radio" name="rating-6" className="mask mask-star" value="1" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star"  value="2" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star" value="3" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star" value="4" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star" value="5" onClick={handleRating}/>
</div>)}