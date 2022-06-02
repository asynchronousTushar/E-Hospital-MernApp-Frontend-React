import React from "react";
import Header from "../components/Header/Header";
import { Form, FormGroup, Label, Input, Button, ModalBody, Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import { isEmail } from '../utilities/formValidator';
import { connect } from "react-redux";
import { logIn } from '../redux/actions';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password))
        }
    }
}

const LogIn = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [logInModalShow, setLogInModalShow] = React.useState(false);

    const onChangeHandler = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value);
        }
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if (!isEmail(email)) {
            return
        }
        fetchLogInData(email, password);
    }

    const fetchLogInData = (email, password) => {
        fetch('http://127.0.0.1:3006/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => {
                if (res.status !== 200) {
                    setLogInModalShow(true);
                    throw new Error()
                }

                return res.json()
            })
            .then((data) => {
                props.logIn({user: data.user, admins: data.admins});
                localStorage.setItem('authToken', data.token);
            })
            .catch((e) => {
                setLogInModalShow(true);
            })
    }

    const toggleLogInModal = () => {
        setLogInModalShow(false);
    }


    return (
        <React.Fragment >
            <Header />
            <Modal isOpen={logInModalShow} toggle={toggleLogInModal}><ModalBody>Log In Failed.</ModalBody></Modal>
            <Form inline className="p-5 mt-5 col-6 bg-dark m-auto rounded" onSubmit={onSubmitHandler}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0 text-light">
                    <Label
                        className="me-sm-2 mb-2"
                        for="exampleEmail"
                    >
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Your Email Address."
                        type="email"
                        onChange={onChangeHandler}
                        value={email}
                        invalid={email !== '' && !isEmail(email)}
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
                        value={password}
                    />
                </FormGroup>
                <Button className="mt-4 px-5" color="primary" outline>
                    Log In
                </Button>
            </Form>
            <div className="mb-5">
                <h6 className="text-center text-light my-3">Or</h6>
                <Button className="d-block col-3 m-auto py-2" color="dark">
                    <NavLink to="/signup" className="nav-link text-light">Sign Up</NavLink>
                </Button>
            </div>
            <Footer fixed='bottom' />
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);