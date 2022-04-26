import React from "react";
import { Form, Label, FormGroup, Input, Modal, Button, ModalBody } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { isSamePassword } from '../../utilities/formValidator';

const AdminSignUp = (props) => {
    const [userData, setUserData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        profileImage: '',
        password: '',
        confirmPassword: '',
        role: '',
        degree: ''
    })

    const [isModalShow, setIsModalShow] = React.useState(false)

    const onChangeHandler = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const filterUserData = {
            ...userData,
            confirmPassword: undefined
        }

        fetch('http://127.0.0.1:3006/adminsignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filterUserData)
        })
            .then((res) => {
                console.log(res)
                if (res.status === 400) {
                    setIsModalShow(true)
                } else if (res.status === 201) {
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch(e => {
                setIsModalShow(true)
                console.log(e)
            })
    }

    const onFileInput = (event) => {
        const fileReader = new FileReader();
        if (event.target.files.length === 0) {
            return;
        }
        fileReader.readAsDataURL(event.target.files[0])

        fileReader.onload = (e) => {
            setUserData({
                ...userData,
                [event.target.name]: e.target.result
            })
        }
    }

    const toggleSignUpModal = () => {
        setIsModalShow(false)
    }


    return (
        <div >
            <Header />
            <Modal isOpen={isModalShow} toggle={toggleSignUpModal} ><ModalBody color="danger">Sign Up Failed.</ModalBody></Modal>
            <Form className="col-6 m-auto p-5 shadow-lg my-5 bg-dark d-block rounded" onSubmit={onSubmitHandler}>
                <h4 className="text-light text-center pb-4">Admin Panel</h4>
                <FormGroup>
                    <Label for="firstName" className="text-light">
                        First Name
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        required
                        onChange={onChangeHandler}
                        value={userData.firstName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName" className="text-light">
                        Last Name
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                        onChange={onChangeHandler}
                        value={userData.lastName} />
                </FormGroup>
                <FormGroup>
                    <Label for="email" className="text-light">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        required
                        onChange={onChangeHandler}
                        value={userData.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="role" className="text-light">
                        Role
                    </Label>
                    <Input
                        id="role"
                        name="role"
                        placeholder="Enter Your Role"
                        type="text"
                        required
                        onChange={onChangeHandler}
                        value={userData.role}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="degree" className="text-light">
                        Degree
                    </Label>
                    <Input
                        id="degree"
                        name="degree"
                        placeholder="Enter Your Latest Degree"
                        type="text"
                        required
                        onChange={onChangeHandler}
                        value={userData.degree}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="profileImage" className="text-light">
                        Profile Image
                    </Label>
                    <Input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept={".jpg, .jpeg, .png"}
                        required
                        onChange={onFileInput}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password" className="text-light">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="At least 8 character"
                        type="password"
                        required
                        onChange={onChangeHandler}
                        value={userData.password}
                        minLength={8}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword" className="text-light">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        required
                        onChange={onChangeHandler}
                        invalid={!isSamePassword(userData.password, userData.confirmPassword)}
                        value={userData.confirmPassword}
                    />
                </FormGroup>
                <FormGroup check className="col-11 mx-auto">
                    <Input type="checkbox" required />
                    <Label check className="text-secondary" >
                        By clicking here, I state that I have read and understood the terms and conditions.
                    </Label>
                </FormGroup>
                <Button color="primary d-block m-auto btn-lg px-5 mt-4" outline>Sign Up</Button>
            </Form>
            <Footer />
        </div>
    );
}

export default AdminSignUp;