import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleHotel from '../SingleHotel/SingleHotel';
import pic from '../../images/Jungle/J3.jpg';
import './Hotels.css'

const Hotels = ({props}) => {
    const hotels = useLoaderData();
    console.log(hotels);
    const { id, details, cancel, image_url, price, rating, title, total_view, total_vote, place_name } = hotels

    
    return (
        <div className='bg-hotels-div mb-5'>

            <div className='row container mx-auto mb-4'>
                <h3 style={{ color: 'goldenrod' }} className='text-start mb-3 mt-5'>Choose Our Hotels</h3>
                <div className='col-lg-7 col-md-12 col-sm-12'>
                    {
                        hotels.map(hotel => <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>)
                    }
                    <div className='text-center mb-5'>
                        <Link to='/'> <button className='back-button btn btn-primary w-50 my-2'>Go Back</button></Link>
                    </div>
                </div>

                <div className=' col-lg-5 col-md-12 col-sm-12'>
                    <div className='text-center'>
                        <iframe className='map' width="498" height="580" id="gmap_canvas" src="https://maps.google.com/maps?q=Cox,s%20bazar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hotels;


{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="498" height="507" id="gmap_canvas" src="https://maps.google.com/maps?q=Cox,s%20bazar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123 movies</a><br><style>.mapouter{position:relative;text-align:right;height:507px;width:498px;}</style><a href="https://www.embedgooglemap.net">how to embed a google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:507px;width:498px;}</style></div></div> */ }