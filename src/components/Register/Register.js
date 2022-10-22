import React, { useContext, useState } from 'react';
import './Register.css';
import login from '../../images/Login.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Register = () => {

    const { createUser, verifyEmail, updateUserProfile, googleLogin, githubLogin } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const passwordFieldType = visible ? "text" : "password";
    const confirmPasswordFieldType = visible1 ? "text" : "password";
    const [alreadyExistUser, setAlreadyExistsUser] = useState('');

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        setPasswordError('');
        setConfirmPasswordError('');
        setSuccess(false);
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photoURL.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, photo, password, confirmPassword);

        if (password.length < 6) {
            setPasswordError('Password must be more than 6 characters');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Password is not matching');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setPasswordError('');
                setSuccess(true);
                event.target.reset();
                Swal.fire(
                    'Great',
                    `${name} You are Successfully Registered`,
                    'success'
                )
                handleUpdateUserProfile(name, photo);
                handleEmailVerification();
                toast.success('A verification mail has been sent to your email address. please verify your email.');
                navigate('/login');
            })

            .catch(error => {
                console.error(error);
                setPasswordError(error.message);
                setSuccess(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registration Failed'
                })
            })
    }


    const handleEmailVerification = () => {
        verifyEmail()
            .then((result) => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }


    const handleUpdateUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        googleLogin(providerGoogle)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire(
                'Great',
                `Hello! ${user.email} By Google`,
                'success'
                )
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Google Login Failed'
            })
        })
    }

    const handleGithubSignin = () => {
        githubLogin(providerGithub)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire(
                'Great',
                `Hello! ${user.displayName} By Github`,
                'success'
                )
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Github Sign In Failed'
            })
        })
    }




    return (
        <div className='home-parent-div row row-cols-1 row-cols-lg-2  px-5 container g-col-4 mx-auto mt-4 mb-5'>
            <div className='image-div my-auto'>
                <img className='img-fluid login-image' src={login} alt="" />
            </div>

            <div className='registration-form-parent-div '>
                <div className=' form-div mt-4 mx-auto registration-form-container px-4'>
                    <h4 style={{ color: "goldenrod" }} className='mt-3 text-center'>New User? Please Register</h4>

                    <Form onSubmit={handleSubmit} className='only-form'>

                        <Form.Group className="mb-1" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <div className='name-field-main-div'>
                                <div>
                                    <Form.Control
                                        className='name-input-field'
                                        type="text" placeholder="Enter Name" name="name" required />
                                </div>
                                <div className='envelope-icon-div'>
                                    <FontAwesomeIcon className='envelope-icon' icon={faUser}></FontAwesomeIcon>
                                </div>
                            </div>

                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <div>
                                <div>
                                    <Form.Control className='email-input-field' type="email" placeholder="Enter Email" name="email" required />
                                </div>
                                <div className='envelope-icon-div'>
                                    <FontAwesomeIcon className='envelope-icon' icon={faEnvelope}></FontAwesomeIcon>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                        </Form.Group>


                        <Form.Group className=" mb-3 password-react-parent-div mt-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <div className=''>
                                <div>
                                    <Form.Control className='password-input-field' type={passwordFieldType} placeholder="Enter Password" name="password" required />
                                </div>

                                <div className='envelope-icon-div'>
                                    {
                                        visible ? <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                                    }
                                </div>
                            </div>
                        </Form.Group>

                        {
                            <p className='text-danger'>{passwordError}</p>
                        }


                        <Form.Group className=" password-react-parent-div" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>

                            <div className=''>
                                <div>
                                    <Form.Control className='password-input-field' type={confirmPasswordFieldType} placeholder="Confirm Password" name="confirmPassword" required />
                                </div>

                                <div className='envelope-icon-div'>
                                    {
                                        visible1 ? <FontAwesomeIcon onClick={() => setVisible1(!visible1)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon onClick={() => setVisible1(!visible1)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                                    }
                                </div>
                            </div>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAccepted}
                                type="checkbox"
                                label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>}
                            />

                        </Form.Group>


                        {
                            <p className='text-danger'>{confirmPasswordError}</p>
                        }

                        {
                            success && <p className='user-added-successfully-text-color'> User Added Successfully</p>
                        }

                        <Button variant={accepted ? 'primary' : 'secondary'} type="submit" disabled={!accepted}>
                            Register
                        </Button>
                    </Form>

                    <p className='my-2'>Already have an account? <Link to='/login'>Login</Link></p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <hr className='w-50 me-3' />
                        <span className='fs-5'>or</span>
                        <hr className='w-50 ms-3' />
                    </div>

                    <div className='google-github-facebook-button-container text-center mt-3'>
                        <div
                            className='google-button-container rounded-4 mb-3'>
                            <button 
                            onClick={handleGoogleSignIn}
                            className='google-button border border-0 btn btn-primary-google w-75'>Google Sign in <Link className='m-1 ms-3' title="Google" target="_blank" role="button"><FaGoogle className='fs-4 google-icon-form'></FaGoogle></Link></button>
                        </div>

                        {/* <div className='facebook-button-container  rounded-4 mb-3'>
                            <button className='facebook-button border border-0 btn btn-primary-facebook w-75'>Facebook Sign in <Link className='m-1 ms-2' title="Facebook" target="_blank" role="button"><FaFacebook className='fs-3 facebook-icon-form'></FaFacebook></Link></button>
                        </div> */}

                        <div className='github-button-container  rounded-4 mb-3 '>
                            <button
                                onClick={handleGithubSignin}
                                className='github-button border border-0 btn btn-primary-github w-75'>Github Sign in <Link className='m-1 ms-2' title="GitHub" target="_blank" role="button"><FaGithub className='fs-3 github-icon-form  fw-bold'></FaGithub></Link></button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;