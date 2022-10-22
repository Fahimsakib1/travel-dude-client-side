import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ShowAllHotels.css'

const ShowAllHotels = ({ hotel }) => {
    console.log(hotel)

    const { id, details, cancel, image_url, price, rating, title, total_view, total_vote, place_name } = hotel;

    return (
        <div>
            <div className="col">
                <div className="card all-hotel-card">
                    <img src={image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className='text-primary fw-bold'>Location: {place_name}</h6>
                        <p className="card-text">{details}</p>
                        <p><span className='fw-bold'>Cancel Criteria: </span> {cancel}</p>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-between'>
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

export default ShowAllHotels;