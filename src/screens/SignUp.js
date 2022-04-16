import Header from '../components/Header/Header';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions'

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userData) => {
            dispatch(signUp(userData))
        }
    }
}

class SignUp extends React.Component {

    state = {}

    render() {
        this.props.signUp('fuck you')

        console.log(this.props);
        // console.log(this.state);


        return (
            <div >
                <Header />
                <Form className="col-6 m-auto p-5 shadow-lg my-5 bg-dark d-block rounded" >
                    <h4 className="text-light text-center pb-3">Sign Up for E-Hospital services</h4>
                    <FormGroup>
                        <Label for="firstName" className="text-light">
                            First Name
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
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
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className="text-light">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthDate" className="text-light">
                            Date Of Birth
                        </Label>
                        <Input
                            id="birthDate"
                            name="birthDate"
                            placeholder="date placeholder"
                            type="date"
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
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className="text-light">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword" className="text-light">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup check className="col-11 mx-auto">
                        <Input type="checkbox" />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);