import Header from '../components/Header/Header';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Footer from '../components/Footer/Footer';

const SignUp = () => {
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
                    <Label for="exampleEmail" className="text-light">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate" className="text-light">
                        Date Of Birth
                    </Label>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
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
                <Button color="primary d-block m-auto btn-lg px-4" outline>Sign Up</Button>
            </Form>
            <Footer />
        </div>
    );
}

export default SignUp;