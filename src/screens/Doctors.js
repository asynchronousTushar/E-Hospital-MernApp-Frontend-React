import Doctor from '../components/Body/Doctor/Doctor';
import { doctorList } from './../components/Body/Doctor/doctor-list';
import { Row } from 'reactstrap';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

const Doctors = () => {
    return (
        <React.Fragment>
            <Header />
            <Row className="m-5">
                {doctorList.map((doctor) => <Doctor doctor={doctor} key={doctor.id} />)}
            </Row>
            <Footer />
        </React.Fragment>
    );
}

export default Doctors;