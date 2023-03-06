import React from 'react'

/**
 * 
 * @param {number} rating - gets the rating value of the reviews made of a single card
 * @returns the visualisation of the selected star rating in the comments made
 */

export default function Stars({ rating }) {

  if (rating <= 1) {
    return (
      <div className="flex flow">
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
      </div>
    );
  }

  if (rating <= 2) {
    return (
      <div className="flex flow">
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
      </div>
    );
  }

  if (rating <= 3) {
    return (
      <div className="flex flow">
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
      </div>
    );
  }

  if (rating <= 4) {
    return (
      <div className="flex flow">
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/Tqth4pN/D9-D9-D9-1.png"
        />
      </div>
    );
  }

  if (rating <= 5) {
    return (
      <div className="flex flow">
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
        <img
          className="mask mask-star-2 rating-xs"
          src="https://i.ibb.co/yVzvswy/F3-A712-1.png"
        />
      </div>
    );
  } else {
    return "Rating calculator went wrong...";
  }
}
