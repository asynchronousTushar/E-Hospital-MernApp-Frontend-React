import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ageCalculator } from "../../utilities/ageCalculator";
import { Row, Col, Card, CardBody, CardTitle, CardText, CardFooter, Button } from "reactstrap";

const Patient = () => {
    const user = useLocation().state;

    console.log(user)
    return (
        <div>
            <Header />
            <Row className="m-1" >
                <Col lg="5">
                    <Card color="white" className="shadow-lg my-1 mx-4 p-4" >
                        <CardBody className="m-auto">
                            <img src={user.profileImage} alt="profile" className="rounded-circle " width="300" height="300" />
                        </CardBody>
                        <CardTitle tag="h4" className="text-center my-3">{user.firstName + ' ' + user.lastName}</CardTitle>
                        <CardTitle tag="h5" className="text-center my-3">Age : {ageCalculator(user.birthDate)}</CardTitle>
                    </Card>
                </Col>
                <Col lg="7">
                    <Card color="white" className="shadow-lg my-1 me-4 ">
                        <CardTitle tag="h2" className="text-center">Issue</CardTitle>
                        <hr />
                        <CardBody style={{minHeight: "50vh", overflowY: "auto"}}>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia accusamus magni rem at. Labore error aliquid rerum assumenda deserunt?</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button color="success" className="d-block m-auto">Guide {user.firstName + " " + user.lastName}</Button>
                        </CardFooter>
                    </Card>
                </Col>

            </Row>
            <Footer fixed="bottom" />
        </div>
    );
}

export default Patient;