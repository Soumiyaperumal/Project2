import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import cat from './images/cat.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Button from 'react-bootstrap/esm/Button'
function Section5() {
  return (
    <div style={{backgroundColor:'rgb(252, 226, 229)'}}>
        <Container>
            <Row className='pt-5 pb-5' xs={1} sm={3}>
                <Col md={5}>
                <div className='fw-bold'><img src={cat} alt="cat" width='50px' height='35px'/>Care Cat</div>
                <p className=' fw-bold pt-5 pb-4'>Sign Up For A Consultation And We Will Contact You With In 5 Minutes</p>
                <Button className='fw-bold navButton2'>Get Started <MdOutlineKeyboardArrowRight className='fs-5'/></Button>
                <p style={{fontSize:'13px'}} className='pt-4 pb-3'>Copyrights2022 CareCat.Design By Olya Puhachova</p>
                </Col>
                <Col md={5}>
                <h5 className='fw-bold pb-5'>Contact Us</h5>
                <div>+48 555 2315</div>
                <div>carecat@gmail.com</div>
                <div className='pb-5'>Wroclaw,29 Ratushna Street</div>
                </Col>
                <Col md={2}>
                <h5 className='fw-bold pb-5'>Menu</h5>
                <div>Pricing</div>
                <div>About Us</div>
                <p>Contacts</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section5