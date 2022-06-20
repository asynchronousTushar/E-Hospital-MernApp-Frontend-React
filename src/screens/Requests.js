import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ListGroup, ListGroupItem } from 'reactstrap'

const Requests = ({ issues }) => {
    return (
        <div>
            <Header />
            <ListGroup className="col-10 mx-auto" >
                {issues && issues.map((issue) => {
                    return (
                        <ListGroupItem key={issue._id} color="info" action tag="button" className="p-3">
                            <h3 className="text-center"  >
                                {issue.issue.description.substring(0, 50) + "..."}
                            </h3>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            <Footer fixed="bottom" />
        </div>
    );
}

export default Requests;