import Doctor from '../components/Body/Doctor/Doctor';
import { Row, Alert } from 'reactstrap';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

const Doctors = ({ doctorList }) => {
    return (
        <React.Fragment>
            <Header />
            <Row className="m-5">
                <Alert hidden={doctorList.length >= 1} className="text-center text-danger col-6 mx-auto"> {doctorList.length < 1 && "We are really sorry to say that, currently no doctor is available."} </Alert>
                {doctorList.map((doctor) => <Doctor doctor={doctor} key={doctor._id} />)}
            </Row>
            <Footer fixed="bottom"/>
        </React.Fragment>
    );
}

export default Doctors;