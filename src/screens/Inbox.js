import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Inbox = (props) => {
    return (
        <React.Fragment>
            <Header />
                
            <Footer fixed="bottom"/>
        </React.Fragment>
    );
}

export default Inbox;