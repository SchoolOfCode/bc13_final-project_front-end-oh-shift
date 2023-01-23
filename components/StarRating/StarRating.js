
export default function StarRating({handleRating}){
return(
<div className="rating">
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="1" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning"  value="2" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="3" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="4" onClick={handleRating}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-warning" value="5" onClick={handleRating}/>
</div>)}