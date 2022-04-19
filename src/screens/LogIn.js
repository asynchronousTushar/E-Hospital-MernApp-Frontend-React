import React from "react";
import Header from "../components/Header/Header";
import { Form, FormGroup, Label, Input, Button, Alert, UncontrolledAlert } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import { isEmail } from '../utilities/formValidator';
import { connect } from "react-redux";
import { fetchLogInData, logIn } from '../redux/actions';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => {
            dispatch(fetchLogInData(email, password))
        }
    }
}

const LogIn = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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


        props.logIn(email, password);
    }


    return (
        <React.Fragment >
            <Header />
            {props.logInFailed && <React.Fragment>
                <br />
                <UncontrolledAlert className="col-6 mx-auto" color="danger">Log In Failed </UncontrolledAlert>
            </React.Fragment>
            }
            
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
            <div>
                <h6 className="text-center text-light my-3">Or</h6>
                <Button className="d-block col-3 m-auto py-2" color="dark">
                    <NavLink to="/signup" className="nav-link text-light">Sign Up</NavLink>
                </Button>
            </div>
            <Footer fixed="bottom" />
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);