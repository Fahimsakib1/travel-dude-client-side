import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllPlaces from '../AllPlaces/AllPlaces';
import './Home.css'

const Home = () => {
    const [allPlaces, setAllPlaces] = useState([]);
    useEffect(() => {
        fetch('https://travel-dude-server-side.vercel.app/places')
            .then(res => res.json())
            .then(data => setAllPlaces(data))
    }, [])

    return (
        <div className='home-page-container'>
            {/* <div className = 'row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-auto mb-5'>
                {
                    allPlaces.map(place => <AllPlaces key={place.id} place={place}></AllPlaces>)
                }
            </div> */}
            <div>
                <div className='row px-4'>
                    <div className='d-flex justify-content-center flex-column flex-lg-row flex-md-column'>
                        <div className='col-4 mx-auto mt-5 text-center'>
                            <h1 className='mt-5 left-title'>Hello Travelers!</h1>
                            <p className='text-para'>Welcome to <span style={{ color: "blue" }}>Travel Dude.</span> We are a travel group over 1000+ customers. We provide our service around the world. Select your destination and enjoy traveling with us</p>

                            <div>
                                <Link to='/register'><button className='register-button px-5 py-2 rounded-2 fw-semibold mt-2'>Register</button></Link>
                            </div>

                        </div>

                        <div className='col-8 mt-5'>
                            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4 mx-auto mb-5 my-auto all-places-div'>
                                {
                                    allPlaces.map(place => <AllPlaces key={place.id} place={place}></AllPlaces>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


