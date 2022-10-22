import React from 'react';
import { FaStar } from "react-icons/fa";
import pic from '../../images/Jungle/J3.jpg';
import './SingleHotel.css';



const SingleHotel = ({ hotel }) => {
    console.log(hotel);
    const { id, details, cancel, image_url, price, rating, title, total_view, total_vote, place_name } = hotel;

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image_url} className="img-fluid rounded-start hotel-image card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text mb-1">{details}</p>
                            <p className="card-text">Cancel System : {cancel}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-between ms-2'>
                                <FaStar className='text-warning me-1 mt-1'></FaStar>
                                <p>{rating.number} ({total_vote})</p>
                            </div>
                            <div>
                                <p className='me-2'><span className='text-primary fw-bold'>${price}</span>/night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;