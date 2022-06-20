import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ageCalculator } from "../utilities/ageCalculator";
import { addIssue } from "../redux/actions";

const mapStateToProps = state => {
    return {
        user: state.user,
        doctorList: state.admins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIssue: (issue) => dispatch(addIssue(issue))
    }
}

const RequestForm = ({ user, doctorList, addIssue }) => {
    const doctor = useLocation().state;
    const navigate = useNavigate()

    const [formValue, setFormValue] = useState({
        fullName: user.firstName + " " + user.lastName,
        age: ageCalculator(user.birthDate),
        address: '',
        description: '',
        bloodGroup: "A+",
        preferredDoctor: doctor ? doctor._id : "anonymous"
    })

    const onSubmit = (event) => {
        event.preventDefault()
        if (formValue.description.trim().length === 0) {
            alert('Please input description.')
            return;
        }

        const issue = {
            ...formValue,
            user: user._id
        }

        fetch('http://127.0.0.1:3006/requestissue', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        })
            .then(res => {
                if (res.status === 201) {
                    setFormValue({
                        ...formValue,
                        address: '',
                        description: ''
                    })
                    event.target.reset()
                    return res.json()
                } else {
                    alert("Please describe more about your issue.")
                    throw new Error("less description.")
                }
            })
            .then(data => {
                alert("Success")
                addIssue(data)
                navigate("/requests")
            })
            .catch(e => {
                console.log(e);
            })

    }

    const onChangeHandler = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Header />
            <Form className="col-6 m-auto p-5 shadow-lg my-5 bg-dark d-block rounded" onSubmit={onSubmit} >
                <h4 className="text-light text-center pb-3">Request for E-Hospital services</h4>
                <FormGroup>
                    <Label for="fullName" className="text-light">
                        Full Name
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        type="text"
                        disabled
                        value={formValue.fullName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age" className="text-light">
                        Age
                    </Label>
                    <Input
                        id="age"
                        name="Age"
                        placeholder="Age"
                        type="number"
                        disabled
                        value={formValue.age}
                    />
                </FormGroup>

                <FormGroup >
                    <Label for="bloodGroup" className="text-light">
                        Blood Group
                    </Label>
                    <Input

                        id="bloodGroup"
                        name="bloodGroup"
                        placeholder="Blood Group"
                        type="select"
                        onChange={onChangeHandler}
                    >
                        <option value="A+">
                            A+
                        </option>
                        <option value="A-">
                            A-
                        </option>
                        <option value="B+">
                            B+
                        </option>
                        <option value="B-">
                            B-
                        </option>
                        <option value="AB+">
                            AB+
                        </option>
                        <option value="AB-">
                            AB-
                        </option>
                        <option value="O+">
                            O+
                        </option>
                        <option value="O-">
                            O-
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="address" className="text-light">
                        Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        type="textarea"
                        onChange={onChangeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description" className="text-light">
                        Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Describe your health issue..."
                        type="textarea"
                        size="20"
                        onChange={onChangeHandler}
                    />
                </FormGroup>
                <FormGroup >
                    <Label for="preferredDoctor" className="text-light">
                        Preferred Doctor
                    </Label>
                    <Input
                        id="preferredDoctor"
                        name="preferredDoctor"
                        type="select"
                        defaultValue={doctor ? doctor._id : "anonymous"}
                        onChange={onChangeHandler}
                    >
                        <option value="anonymous">
                            Anonymous
                        </option>

                        {doctorList.map((item, index) => {
                            return (
                                <option value={item._id} key={index}>{item.firstName + " " + item.lastName}</option>
                            );
                        })}
                    </Input>
                </FormGroup>
                <Button color="primary d-block m-auto btn-lg px-5 mt-4" outline >Submit</Button>
            </Form>
            <Footer fixed="" />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);