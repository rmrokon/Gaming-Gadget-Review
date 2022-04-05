import React from 'react';
import useReview from '../../useReview/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const reviews = useReview();
    return (
        <div className='flex justify-center'>
            <div className='md:w-1/2'>
                <h3 className='text-center text-3xl font-bold my-5 underline tracking-widest p-0'>Customer Reviews</h3>
                <div className='grid grid-cols-1 gap-5 m-3 place-items-center'>
                    {
                        reviews.map(review => <SingleReview key={review._id} {...review}></SingleReview>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Reviews;