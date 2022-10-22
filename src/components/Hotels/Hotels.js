import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleHotel from '../SingleHotel/SingleHotel';
import pic from '../../images/Jungle/J3.jpg';
import './Hotels.css'

const Hotels = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    const { id, details, cancel, image_url, price, rating, title, total_view, total_vote, place_name } = hotels

    return (
        <div className='bg-hotels-div mb-5'>

            <div className='row container mx-auto mb-4'>
                <h3 style={{ color: 'goldenrod' }} className='text-start mb-3 mt-5'>Choose Our Hotels</h3>
                <div className='col-7'>
                    {
                        hotels.map(hotel => <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>)
                    }
                    <div className='text-center'>
                        <Link to='/'> <button className='back-button btn btn-primary w-50 my-2'>Go Back</button></Link>
                    </div>
                </div>

                <div className='col-5'>
                    <img src={pic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hotels;