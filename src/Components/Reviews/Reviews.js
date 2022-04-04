import React from 'react';
import useReview from '../../useReview/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const reviews = useReview();

    return (
        <div>
            <h3>reviews added: {reviews.length}</h3>
            <div className='grid grid-cols-1 gap-5 m-5 place-items-center'>
                {
                    reviews.map(review => <SingleReview key={review._id} {...review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;