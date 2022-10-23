import React from 'react';
import './Footer.css';
import TD2 from '../../images/icons/TD1-No-Bg.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='footer-parent-div'>
            <footer className="  bg-dark text-center text-white  footer-section">
                {/* <!-- Grid container --> */}


                <div className="container p-4 pb-0 col col-sm-12 col-lg-12 col-md-12 col-12 ">

                    <div className="">
                        <div className="d-flex justify-content-center">
                            <img className="" src={TD2} alt="" style={{ width: "50px", height: "50px", marginTop: "-5px", borderRadius: "50%", marginRight: '10px' }} />
                            <h3 className="text-warning">Travel Dude</h3>
                        </div>
                        <p className="text-muted">Dhaka, Bangladesh</p>
                        <p className="text-muted text-center footer-email">Email: traveldude@gmail.com</p>
                        <p className="text-muted text-center forter-mobile">Mobile: 01234567890</p>
                        <p>Privacy Policy || <a className="footer-terms-and-condition" href="/">Terms Of Use</a></p>
                    </div>

                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4 ">

                        {/* <!-- Facebook --> */}
                        <Link className='m-1 px-3 facebook-icon' title="Facebook" target="_blank" to="https://www.facebook.com/moebdgov" role="button"><FaFacebook className='fs-4 facebook-icon'></FaFacebook></Link>

                        <Link className='instagram-icon m-1 px-3' title="Instagram" target="_blank" to="https://www.facebook.com/moebdgov" role="button"><FaInstagram className='text-danger fs-4 instagram-icon'></FaInstagram></Link>

                        <Link className='m-1 px-3 linkedin-icon' title="LinkedIn" target="_blank" to="https://www.facebook.com/moebdgov" role="button"><FaLinkedin className='text-primary fs-4 linkedin-icon'></FaLinkedin></Link>

                        <Link className='m-1 px-3 github-icon' title="GitHub" target="_blank" to="https://www.facebook.com/moebdgov" role="button"><FaGithub className='text-white fs-4 github-icon'></FaGithub></Link>

                    </section>

                </div>


                <div className="text-center p-3 last-div" >
                    <span style={{ fontSize: "16px" }}>© 2022 Copyright || Developed By -</span>
                    <Link className="text-warning my-name"> Fahim Faysal Sakib</Link>
                </div>

            </footer>
        </div>
    );
};

export default Footer;