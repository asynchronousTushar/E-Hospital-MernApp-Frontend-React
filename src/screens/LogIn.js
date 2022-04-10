import React from "react";
import Header from "../components/Header/Header";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

const LogIn = () => {
    return (
        <React.Fragment >
            <Header />
            <Form inline className="p-5 mt-5 col-6 bg-dark m-auto rounded" >
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

export default LogIn;