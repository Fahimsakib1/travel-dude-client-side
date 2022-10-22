import React, { useContext, useState } from 'react';
import './Login.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const { userLogin, setLoading, googleLogin, githubLogin } = useContext(AuthContext);

    const [visible, setVisible] = useState(false);
    const passwordFieldType = visible ? "text" : "password";
    const [error, setError] = useState('');
    const [successLogin, setSuccessLogin] = useState(false);

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                event.target.reset();
                // navigate(from, { replace: true })
                if (user.emailVerified) {
                    console.log("User From Login Page", user)
                    toast.success("Congratulations! Login Successful");
                    setSuccessLogin(true);
                    navigate(from, { replace: true })
                }
                else {
                    toast.error("Email is not verified yet. Please Verify to Login. ")
                }
            })

            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login Failed'
                })
                successLogin(false);
            })

            .finally(() => setLoading(false))
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
        <div>
            <div className='mx-auto my-5 container login-container w-50'>
                <h4 style={{ color: "goldenrod" }} className='mt-3 text-center'>Please Login</h4>

                <form
                    onSubmit={handleLogin}
                    className='login-form-container px-3'>

                    <div className="">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                        <div>
                            <input

                                type="email" className="form-control" id="formGroupExampleInput" placeholder="Add Your Email" name="email" required />
                        </div>

                        <div className='envelope-icon-div'>
                            <FontAwesomeIcon className='envelope-icon' icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <div>
                            <input type={passwordFieldType} className="form-control" id="formGroupExampleInput2" placeholder="Add Password" name="password" required />
                        </div>

                        <div className='password-icon-div'>
                            {
                                visible ?

                                    <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon>

                                    :

                                    <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                            }
                        </div>

                    </div>


                    <div className=''>
                        <button type="submit" className='btn btn-primary text-center mx-auto px-4'>Login</button>
                    </div>

                    {
                        successLogin && <p className='login-successful-text-color'> Login Successful</p>
                    }

                </form>

                <div className='d-flex justify-content-between login-lower-container px-3'>
                    <p className='register-title-link'>New to this website? <Link to='/register'> Register</Link></p>
                    <div className='d-flex justify-content-between mt-2 reset-password-parent-div'>
                        <p className='my-2'>Forget Password? <button type="button" className="btn btn-link reset-password-link-button">Reset Password</button></p>
                    </div>
                </div>

                <div className='google-github-facebook-button-container text-center mt-3'>
                    <div className='google-button-container rounded-4 mb-3'>
                        <button onClick={handleGoogleSignIn} className='google-button border border-0 btn btn-primary-google w-75'>Google Sign in <Link className='m-1 ms-3' title="Google" target="_blank" role="button"><FaGoogle className='fs-4 google-icon-form'></FaGoogle></Link>
                        </button>
                    </div>

                    <div className='github-button-container  rounded-4 mb-3 '>
                        <button onClick={handleGithubSignin} className='github-button border border-0 btn btn-primary-github w-75'>Github Sign in <Link className='m-1 ms-2' title="GitHub" target="_blank" role="button"><FaGithub className='fs-3 github-icon-form  fw-bold'></FaGithub></Link>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Login;