import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import cat from './images/cat.png'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Example from './Modal'
import Example2 from './Modal2'
import { Link } from 'react-router-dom'
function Section1() {
  return (
    <div className='pt-5 HeaderColor'>
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <img src={cat} alt="cat" width='50px' height='35px'></img>
        <Navbar.Brand href="#home" className='mt-2' style={{fontWeight:'bold'}}>Care Cat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link style={{color:'black',fontWeight:'600'}} className='mx-2'><Link to='/price' className='mx-2 Link'>Pricing</Link></Nav.Link>
            <Nav.Link style={{color:'black',fontWeight:'600'}} className='mx-2'><Link to='/contact' className='mx-2 Link'>Contacts</Link></Nav.Link>
            <Nav.Link style={{color:'black',fontWeight:'600'}} ><Link to='/about' className='mx-2 Link'>About Us</Link></Nav.Link>
            <div className='pb-3'><Example/></div>
            <div><Example2/></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='pb-5 pt-5 HeaderColor'>
      <Row xs={1} md={1} lg={2} >
        <Col xs={12} lg={6}>
        <h1 style={{fontSize:'63px'}} className='pt-5 pb-5'>Order The <span className='fw-bold'>Best</span> Cat <span className='fw-bold'>Food</span> From Us</h1>
        <h3 className='pb-5'>Only High-Quality And Proven Products,<br/>Buy In Time At A Promotional Price</h3>
        <Button className='mx-2 fw-bold navButton2'>Get Started <MdOutlineKeyboardArrowRight className='fs-5'/></Button>
        <Button className='mx-2 fw-bold navButton1'>Learn More</Button>
        </Col>
        <Col xs={12} lg={6}>
        <div className='pt-4'>
        <div className='imagetop1 headerImage'></div>
        <div className='imagetop2 headerImage'></div>
        <div className='imagetop3 headerImage'></div>
        <div className='headerImageMain headerImage'></div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Section1;