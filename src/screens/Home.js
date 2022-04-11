import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import React from "react";

const Home = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer fixed="bottom" />
        </React.Fragment>
    );
}

export default Home;