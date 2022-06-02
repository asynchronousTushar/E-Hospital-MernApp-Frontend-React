import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useLocation } from "react-router";

const RequestForm = ({ doctorList }) => {
    const doctor = useLocation().state;
    return (
        <div>
            <Header />
            <Form className="col-6 m-auto p-5 shadow-lg my-5 bg-dark d-block rounded" >
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
                        value={"Tushar Biswas"}
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
                        value={23}
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
                    >
                        <option>
                            A+
                        </option>
                        <option>
                            A-
                        </option>
                        <option>
                            B+
                        </option>
                        <option>
                            B-
                        </option>
                        <option>
                            AB+
                        </option>
                        <option>
                            AB-
                        </option>
                        <option>
                            O+
                        </option>
                        <option>
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
                        defaultValue={ doctor ? doctor._id : "anonymous"}
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
                <Button color="primary d-block m-auto btn-lg px-5 mt-4" outline>Submit</Button>
            </Form>
            <Footer fixed="" />
        </div>
    );
}

export default RequestForm;