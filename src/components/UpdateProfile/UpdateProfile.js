import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import './UpdateProfile.css';




const UpdateProfile = () => {

    const [accepted, setAccepted] = useState(false);
    const { user, updateUserProfile, loading } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const photoURLRef = useRef(user.photoURL);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        photoURLRef.current.focus();
        console.log("User From Profile Component", user);
        console.log(name, photoURLRef.current.value)
        handleUpdateUserProfile(name, photoURL);
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePhotoURLChange = (event) => {
        setPhotoURL(event.target.value)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                //const user = result.user;
                //console.log(user)
                Swal.fire(
                    'Great',
                    "User name and photo updated successfully",
                    'success'
                )
                navigate('/login')
            })

            .catch(error => {

                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Update Failed'
                })
            })
    }

    const handleChecked = (event) => {
        setAccepted(event.target.checked);
    }




    return (
        <div className='mx-auto w-50 mt-5 update-profile-container'>
            <h4 style={{ color: "goldenrod" }} className='mt-3 text-center'>Update Profile</h4>
            <Form className='mb-4 mt-3' onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='text-muted fs-5' readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        className='fw-bold fs-5'
                        onChange={handleNameChange}
                        type="text"
                        defaultValue={name}
                        placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        ref={photoURLRef}
                        onChange={handlePhotoURLChange}
                        defaultValue={photoURL}
                        type="text"
                        placeholder="Add Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" onClick={handleChecked}/>
                </Form.Group>

                <Button variant={accepted ? 'primary' : 'secondary'} type="submit" disabled={!accepted}>
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default UpdateProfile;