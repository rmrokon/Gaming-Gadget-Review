import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const SingleReview = ({ picture, name, rating, review }) => {
    return (
        <div className='border-2 rounded-lg p-5 sm:w-1/4  md:w-full overflow-x-hidden'>
            <div className='flex items-center'>
                <img className='rounded-lg' src={picture} alt="" />
                <p className='ml-5 text-xl font-bold'>{name}</p>
            </div>
            <p className='flex mt-3 align-middle items-center font-bold text-lg'><span className='font-bold mr-3'>Rating:</span> {rating}<StarIcon className='w-5 h-5 text-yellow-500'></StarIcon></p>
            <p className='my-3 text-lg'>{review}</p>
        </div>
    );
};

export default SingleReview;