import React from 'react';
import { Link } from 'react-router-dom';
import './AllPlaces.css'

const AllPlaces = ({ place }) => {
    const { id, name, image1 } = place;

    return (
        <div className="col mb-3 mt-4  each-card-div rounded-4 each-card-container">
            <div className="card each-place-card-div mx-auto">
                <img src={image1} className="custom-bg-image card-image" alt="..." />
                <Link to={`/booking/${id}`} className='w-100 rounded-4 mt-2 title-div mb-1'> 
                    <div>
                        <h4 className="card-title my-3 place-name ms-4 text-center">{name}</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AllPlaces;