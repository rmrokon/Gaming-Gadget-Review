import React from 'react';
import Image from '../../images/image.jpg'
import useReview from '../../useReview/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const reviews = useReview();
    return (
        <div>
            <div className='flex flex-row justify-around'>
                <div className='basis-1/2 mt-20'>
                    <h3 className='text-3xl font-bold mb-5'>Xbox Core Wireless Controller – Carbon Black</h3>
                    <p className='text-lg'>Experience the latest design of Xbox. Completely wireless controller. Stay on target with the hybrid D-pad. Connect using the USB-C port for direct plug and play to console or PC. Support for AA batteries is included on the rear.</p>
                    <button className='mt-5 bg-orange-100 p-5 rounded-md text-red-600  text-lg font-bold'>Watch Gameplay</button>
                </div>
                <div className=''>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div>
                <h3 className='text-center text-3xl font-bold'>Customer Review ({reviews.length})</h3>
                <div className='flex p-10'>
                    {
                        reviews.slice(0, 3).map(review => <SingleReview key={review._id} {...review}></SingleReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;