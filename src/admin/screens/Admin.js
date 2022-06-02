import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Col, Card, CardBody, CardTitle, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const mapStateToProps = state => state;

const Admin = (props) => {
    console.log(props)


    return (
        <div>
            <Header />
            <Row className="container" >
                <Col>
                    <Card color="white" className="shadow-lg my-1 mx-4 p-4" >
                        <CardBody className="m-auto">
                            <img src={props.admin.profileImage} alt="profile" className="rounded-circle " width="300" height="300" />
                        </CardBody>
                        <CardTitle tag="h4" className="text-center my-3"> Dr. {props.admin.firstName + ' ' + props.admin.lastName}</CardTitle>
                        <CardTitle tag="h5" className="text-center my-1">Specialist : {props.admin.role}</CardTitle>
                        <CardTitle tag="h5" className="text-center my-1">Degree : {props.admin.degree}</CardTitle>
                    </Card>
                </Col>
                <Col className="mt-3">
                    <h2 className="text-center text-light mb-4"> Patient List</h2>
                    <ListGroup style={{ overflowY: 'auto', height: "90vh" }}>
                        {props.users.map((user) => {
                            return (
                                <ListGroupItem key={user._id} color="success" action tag="button" >
                                    <NavLink state={user} to={`/admin/patient/${user._id}`} className="nav-link text-dark">  {user.firstName + " " + user.lastName} </NavLink>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default connect(mapStateToProps, null)(Admin);