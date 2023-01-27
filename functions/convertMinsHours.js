export default  function convertMinsHours(mins) {
    if (mins%60 == 0) {
    let hours = mins/60
    return (hours<2) ? `${hours} hour` : `${hours} hours`
    } else {
    let difference=mins%60
    let hours = (mins-difference)/60
    return (hours>1) ? `${hours} hours ${difference} mins` : (hours==0) ? `${difference} mins` :`${hours} hour ${difference} mins`   
  }}
