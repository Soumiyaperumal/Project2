import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Section2() {
  return (
    <Container className='pb-5'>
        <h1 className='text-center pt-5 mt-5 pb-5 fw-bold'>About us</h1>
    <Row xs={1} md={1} lg={2}>
      <Col>
      <div className='AboutImage headerImage pt-5'></div>
      </Col>
      <Col>
      <h2 className='pt-5 fs-3 fw-bold'>We Care About Our Clients</h2>
      <div className='pt-4 fs-4'>We Are An Online Store For Ordering Food Andother Accessories For Your Pets,We Cooperate Only Withproven Brands</div>
      <Row><h1 className='pt-5 fw-bold'>
      <span style={{marginRight:'10px'}}>3000+</span> 
      <span className='px-5'>10000+</span>  
      <span className='px-4'>1M+</span></h1>
      <p style={{color:'grey'}}>
      <span style={{marginRight:'30px'}}>Happy Animals</span> 
      <span className='px-5'>More Customers</span>  
      <span className='px-5 '>Sold Item</span></p>
      </Row>
      </Col>
    </Row>
  </Container>
  )
}

export default Section2