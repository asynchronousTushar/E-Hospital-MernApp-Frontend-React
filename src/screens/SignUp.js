import Header from '../components/Header/Header';
import { Form, FormGroup, Label, Input, Button, UncontrolledAlert, } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import React from 'react';
import { connect } from 'react-redux';
import { fetchSignUpData } from '../redux/actions';
import * as formValidator from '../utilities/formValidator';
import { Navigate } from 'react-router';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userData) => {
            dispatch(fetchSignUpData(userData));
        }
    }
}

class SignUp extends React.Component {
    state = {
        userData: {
            firstName: '',
            lastName: '',
            email: '',
            birthDate: '',
            profileImage: '',
            password: '',
            confirmPassword: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (formValidator.isEmail(this.state.userData.email) && formValidator.isPositiveDate(this.state.userData.birthDate) && formValidator.isSamePassword(this.state.userData.password, this.state.userData.confirmPassword)) {
            this.props.signUp(this.state.userData)
        }

        return;
    }

    onChangeHandler = (event) => {
        this.setState((prevState) => {
            return {
                userData: {
                    ...prevState.userData,
                    [event.target.name]: event.target.value
                }
            }
        })
    }

    onFileInput = (event) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0])

        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                userData: {
                    ...prevState.userData,
                    [event.target.name]: e.target.result
                }
            }))
        }
    }

    componentDidMount() {

    }

    render() {
        // // const now = new Date();
        // // const birthDate = this.state.userData.birthDate;
        // // const age = Math.abs(new Date(now - new Date(birthDate)).getFullYear() - 1970)

        if (this.props.user) {
            return <Navigate to='login' />
        }

        return (
            <div >
                <Header />
                <Form className="col-6 m-auto p-5 shadow-lg my-5 bg-dark d-block rounded" onSubmit={this.submitHandler}>
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
                            required
                            onChange={this.onChangeHandler}
                            value={this.state.userData.firstname}
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
                            onChange={this.onChangeHandler}
                            value={this.state.userData.lastName} />
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
                            onChange={this.onChangeHandler}
                            value={this.state.userData.email}
                            invalid={this.state.userData.email !== '' && !formValidator.isEmail(this.state.userData.email)}
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
                            required
                            onChange={this.onChangeHandler}
                            value={this.state.userData.birthDate}
                            invalid={this.state.userData.birthDate !== '' && !formValidator.isPositiveDate(this.state.userData.birthDate)}
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
                            onChange={this.onFileInput}
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
                            onChange={this.onChangeHandler}
                            value={this.state.userData.password}
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
                            onChange={this.onChangeHandler}
                            value={this.state.userData.confirmPassword}
                            invalid={this.state.userData.confirmPassword !== '' && !formValidator.isSamePassword(this.state.userData.password, this.state.userData.confirmPassword)}
                        />
                    </FormGroup>
                    <FormGroup check className="col-11 mx-auto">
                        <Input type="checkbox" required />
                        <Label check className="text-secondary" >
                            By clicking here, I state that I have read and understood the terms and conditions.
                        </Label>
                    </FormGroup>
                    {this.props.signUpFailed === true ? <UncontrolledAlert color='danger'>Email is already registered! Please input another one.</UncontrolledAlert> : null}
                    <Button color="primary d-block m-auto btn-lg px-5 mt-4" outline>Sign Up</Button>
                </Form>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);