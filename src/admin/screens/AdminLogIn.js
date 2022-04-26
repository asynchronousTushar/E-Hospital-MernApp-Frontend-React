import React from "react";
import Footer from "../../components/Footer/Footer";
import { Form, FormGroup, Label, Input, Button, Modal, ModalBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import { isEmail } from "../../utilities/formValidator";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { adminLogIn } from '../../redux/actions';

const mapDispatchToProps = dispatch => {
    return {
        adminLogIn: (userData) => dispatch(adminLogIn(userData))
    }
}


const AdminLogIn = (props) => {
    const [userData, setUserData] = React.useState({
        email: '',
        password: ''
    });
    const [isModalShow, setIsModalShow] = React.useState(false);

    const onChangeHandler = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if (!isEmail(userData.email)) {
            return
        }

        fetch('http://127.0.0.1:3006/adminlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userData.email, password: userData.password })
        })
            .then((res) => {
                if (res.status !== 200) {
                    setIsModalShow(true)
                    throw new Error()
                }

                return res.json()
            })
            .then((data) => {
                props.adminLogIn(data)
            })
            .catch((e) => {
                setIsModalShow(true)
                console.log(e)
            })
    }

    const toggleLogInModal = () => {
        setIsModalShow(false)
    }

    return (
        <React.Fragment >
            <Header />
            <Modal isOpen={isModalShow} toggle={toggleLogInModal}><ModalBody>Log In Failed.</ModalBody></Modal>
            <Form inline className="p-5 mt-5 col-6 bg-dark m-auto rounded" onSubmit={onSubmitHandler}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0 text-light">
                    <Label
                        className="me-sm-2 mb-2"
                        for="email"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Address."
                        type="email"
                        onChange={onChangeHandler}
                        value={userData.email}
                        invalid={userData.email !== '' && !isEmail(userData.email)}
                    />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0 text-light">
                    <Label
                        className="me-sm-2 mt-3 mb-2"
                        for="examplePassword"
                    >
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={onChangeHandler}
                        value={userData.password}
                    />
                </FormGroup>
                <Button className="mt-4 px-5" color="primary" outline>
                    Log In
                </Button>
            </Form>
            <div>
                <h6 className="text-center text-light my-3">Or</h6>
                <Button className="d-block col-3 m-auto py-2" color="dark">
                    <NavLink to="admin/signup" className="nav-link text-light">Sign Up</NavLink>
                </Button>
            </div>
            <Footer fixed="bottom" />
        </React.Fragment>
    );
}

export default connect(null, mapDispatchToProps)(AdminLogIn);