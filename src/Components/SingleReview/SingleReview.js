import React from 'react';

const SingleReview = ({ picture, name, rating, review }) => {
    return (
        <div className='border-2 rounded-lg p-5 w-1/2 mr-5'>
            <div className='flex items-center'>
                <img className='rounded-lg' src={picture} alt="" />
                <p className='ml-5 text-xl font-bold'>{name}</p>
            </div>
            <p>Rating: {rating}</p>
            <p>description: {review}</p>
        </div>
    );
};

export default SingleReview;