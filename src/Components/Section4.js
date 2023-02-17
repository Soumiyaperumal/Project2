import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Brand1 from './images/Brand1.png'
import Brand2 from './images/Brand2.png'
import Brand3 from './images/Brand3.png'
import Brand4 from './images/Brand4.png'
import Brand5 from './images/Brand5.png'
function Section4() {
  return (
    <Container>
      <Row className='pb-5'>
      <h1 className='text-center pt-5 pb-5 fw-bold'>Choose A Diet For Your Pet</h1>
        <Col className='pt-5' xs={12} md={6}>  
        <p className='fs-3 fw-bold pt-3'>Sign Up For A Consultation And We Will Contact You With In 5 Minutes</p>
        <p className='fs-5 pt-4 pb-3'>For New Customers, We Offer A Free Consultation With Our Doctor Who Will Help You Choose Food</p>
        <Button className='fw-bold navButton2'>Get Started <MdOutlineKeyboardArrowRight className='fs-5'/></Button>
        </Col>
        <Col xs={12} md={6}>
        <div className='DietPlanImage headerImage'></div>
        </Col>
      </Row>
      <h1 className='text-center fw-bold pb-5'>Brands We Stock</h1>
      <Row className='pb-5 gy-5' xs={2} md={3} lg={5}>
        <Col><img src={Brand1}  alt='brandname' width='160px' height='70px'/></Col>
        <Col><img src={Brand5} className=' mt-3' alt='brandname' width='160px' height='70px'/></Col>
        <Col><img src={Brand2} alt='brandname' width='160px' height='70px'/></Col>
        <Col><img src={Brand3}  alt='brandname' width='160px' height='70px'/></Col>
        <Col><img src={Brand4}  alt='brandname' width='180px' height='90px'/></Col>
      </Row>
    </Container>
  );
}

export default Section4;