import '../css/Header.css';
import {Image, Col, Row, Navbar} from 'react-bootstrap';
const Header = () =>{
    return <Row>
    <Col className="col-sm-12">
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Image className=" image-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt="keep"/>
    <h3>Keep</h3>
    </Navbar>
    </Col>
    </Row>
}

export default Header;