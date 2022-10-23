import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Booking.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../images/CoxsBazar/Coxs1.png';
import pic2 from '../../images/CoxsBazar/Cox2.png';
import pic3 from '../../images/CoxsBazar/Coxs3.png';
import Hotels from '../Hotels/Hotels';



const Booking = () => {
    const selectedPlace = useLoaderData();
    console.log(selectedPlace);
    const { name, description, image1,image2, image3, image4, image5, id, map_link } = selectedPlace;
    console.log(name, image1, image2, image3, image4, image5, map_link)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const [cityName, setCityName] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const city = event.target.cityName.value;
        const date1 = event.target.fromDate.value;
        const date2 = event.target.toDate.value;
        console.log(date1, date2);

        setCityName(city);
        setJourneyDate(date1);
        setReturnDate(date2);

        console.log(cityName,journeyDate, returnDate )

        Swal.fire(
            'Great',
            `${cityName} ${journeyDate} and ${returnDate} are booked`,
            'success'
        )

    }










    return (
        <div className='booking-container'>
            {/* <div className=' row row-cols-1 row-cols-lg-2  px-5 container g-col-4 mx-auto mt-4 mb-5'>
                <div className='w-50 mt-5 me-4'>
                    <h1 style={{ color: "goldenrod" }}>{name}</h1>
                    <p className='text-white description'>{description}</p>
                </div>

                <div className='w-50 mt-5 me-4'>
                    <Form className='main-form'>
                        
                        <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                            <Form.Label className='title'>Origin</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" className='input-field py-2'/>
                        </Form.Group>

                        <Form.Group className="mb-3 ms-2" controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Destination"  className='input-field py-2'/>
                        </Form.Group>
            
                        <Button className='ms-2' variant="primary" type="submit">
                            Start Booking
                        </Button>
                    </Form>
                </div>
            </div> */}

            <div className=''>
                <div className='home-parent-div row row-cols-1 row-cols-lg-2  px-5 container g-col-4 mx-auto mb-5'>
                    <div className=' mt-5'>

                        <div className='mb-4'>
                            <Carousel >

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image5}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>

                        <div>
                            <h1 style={{ color: "goldenrod" }}>{name}</h1>
                            <p style={{textAlign:"justify"}} className='text-white description'>{description}</p>
                        </div>
                    </div>

                    <div className='booking-form-parent-div mt-5'>
                        <div className=' form-div mt-4 mx-auto registration-form-container px-4'>
                            <h4 className='text-primary mt-3 text-center'>Confirm Booking</h4>

                            <Form className='booking-form' onSubmit={handleSubmit} >

                                <Form.Group className="mb-1" controlId="formBasicName">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control
                                        className='input-field py-2 fs-5'
                                        type="text" placeholder="Enter City" name="cityName" required />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control className='input-field py-2 text-muted fs-5 fw-bold' type="text" placeholder="Enter Email" name="destination" defaultValue={name} readOnly />
                                </Form.Group>

                                <div className='d-flex justify-content-between flex-md-row flex-column'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>From</Form.Label>
                                        <Form.Control className='input-field py-2 text-dark fs-5' type="date" placeholder="" name="fromDate" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control className='input-field py-2 text-dark fs-5 ' type="date" placeholder="" name="toDate" required />
                                    </Form.Group>

                                </div>

                                <div className='text-center'>
                                    <Link to={`/hotels/${id}`}>
                                        <button className='booking-button px-4 py-2 w-75 my-3 fw-semibold fs-6 rounded-3'>
                                            Start Booking
                                        </button>
                                    </Link>
                                </div>

                            </Form>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Booking;