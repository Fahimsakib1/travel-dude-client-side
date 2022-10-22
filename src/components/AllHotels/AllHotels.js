import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShowAllHotels from '../ShowAllHotels/ShowAllHotels';

const AllHotels = () => {

    const allHotels = useLoaderData();
    console.log(allHotels)

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto my-5'>
            {
                allHotels.map(hotel => <ShowAllHotels key={hotel.id} hotel={hotel}></ShowAllHotels>)
            }
            <div className='text-center mx-auto'>
                <Link to='/'> <button className='back-button btn btn-primary my-2 w-75'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default AllHotels;