import '../css/Footer.css';
import {Col, Row} from 'react-bootstrap';

const Footer = () =>{
    let currentYear = new Date().getFullYear();
return <Row>
<Col md={12}>
<p id="copyright">@Copyright yarden tulchinsky {currentYear}</p> 
</Col>
</Row>

}

export default Footer;