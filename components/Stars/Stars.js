export default function Stars({rating}){
    if (rating === 1) {
        return (
<div className="flex flow">
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
</div>
    )}

 if (rating === 2) {
    return (
<div className="flex flow">
            <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
            <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
</div>
)}

 if (rating === 3) {
    return (
<div className="flex flow">
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
</div>
)}

 if (rating === 4) {
    return (
<div className="flex flow">
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
  <img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png" />
</div>
)}

 if (rating === 5) {
    return (
<div className="flex flow">
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
<img className="mask mask-star-2 rating-xs" src="https://i.ibb.co/yVzvswy/F3-A712-1.png" />
</div>
)}

else {
    return 'Rating calculator went wrong...'
}
    
    }


//     export default function Stars(rating){
//         console.log('this is the rating in the Stars function', rating, typeof rating)
    
//         if (rating === 1) {
//             console.log('rating = 1')
//             return (
//                 <div>
//     <div class="rating rating-xs">
//     ★☆☆☆☆
//     </div>
//         </div>)}
    
//      if (rating === 2) {
//         console.log('rating = 2')
//         return (
//     <div class="rating rating-xs">
// ★★☆☆☆
//     </div>)}
    
//      if (rating === 3) {
//         console.log('rating = 3')
//         return (
//     <div class="rating rating-xs">
// ★★★☆☆
//     </div>
//     )}
    
//      if (rating === 4) {
//         console.log('rating = 4')
//         return (
//     <div class="rating rating-xs">
// ★★★★☆
//     </div>
//     )}
    
//      if (rating === 5) {
//         console.log('rating = 5')
//         return (
//     <div class="rating rating-xs">
//      ★★★★★
//     </div>
    
//     )}
    
//     else {
//         return 'Rating calculator went wrong...'
//     }
        
//         }