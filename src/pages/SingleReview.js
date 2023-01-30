//  import { useState } from 'react'
 
const starEmojis = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

function SingleReview({review}){
  return (
    <>
      <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
      <p>Stars: <span className="span-tag">{starEmojis[review.star_rating - 1]}</span></p>
    </>
  );
}

export default SingleReview