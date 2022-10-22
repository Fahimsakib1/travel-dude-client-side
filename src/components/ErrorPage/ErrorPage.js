import React from 'react';
import { faFaceSadCry, faFaceSadTear, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center text-center'>

                <div className='my-5'>
                    <div>
                        <FontAwesomeIcon icon={faFaceSadCry} className="error-icon text-muted"></FontAwesomeIcon>
                    </div>

                    <div>
                        <h1 className='error-title text-danger font-bold mt-2'>
                            404. Page Not Found
                        </h1>
                        <p className='fs-4 text-muted'>This page is not available. Please visit the available routes</p>
                    </div>
                    <div className='mt-3'>
                        <Link to="/">
                            <button className='btn btn-primary px-4 py-2 fs-5'>Go To Homepage</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;