import { Navbar } from "reactstrap";

const Footer = (props) => {
    return ( 
        <Navbar fixed={props.fixed || ""} color="dark" className="pt-4">
            <p className="text-white-50 mx-auto ">Copyright &copy;2022 <strong>E-Hospital</strong> </p>
        </Navbar>
     );
}
 
export default Footer;