import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const AdminInbox = (props) => {
    return (
        <div>
            <Header />
            <Card color="white mx-4 my-3" >
                <CardTitle tag="h2" className="text-center my-3"> Inbox</CardTitle>
                <hr />
                <CardBody style={{ minHeight: "60vh", overflowY: "auto" }}>
                        <ListGroup>
                            <ListGroupItem
                                action
                                tag="button"
                            >
                                Cras justo odio
                            </ListGroupItem>
                            <ListGroupItem
                                action
                                tag="button"
                            >
                                Dapibus ac facilisis in
                            </ListGroupItem>
                            <ListGroupItem
                                action
                                tag="button"
                            >
                                Morbi leo risus
                            </ListGroupItem>
                            <ListGroupItem
                                action
                                tag="button"
                            >
                                Porta ac consectetur ac
                            </ListGroupItem>
                        </ListGroup>
                </CardBody>
            </Card>
            <Footer fixed="bottom" />
        </div>
    );
}

export default AdminInbox;