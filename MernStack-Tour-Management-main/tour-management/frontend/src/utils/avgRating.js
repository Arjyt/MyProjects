const calculateAvgRating = reviews=>{
    const totelRating =reviews?.reduce((acc,item)=>acc + item.rating,0)
    const avgRating =totelRating===0 ? '' : totelRating===1 ? totelRating: (totelRating/reviews ?.length).toFixed(1)
    return{
        totelRating,avgRating
    }
}
export default calculateAvgRating