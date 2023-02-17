import React from 'react'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Button from 'react-bootstrap/esm/Button'
import catToy1 from './images/catToy1.png'
import catToy2 from './images/catToy2.png'
import catToy3 from './images/catToy3.png'
import catToy4 from './images/catToy4.png'
import catToy5 from './images/catToy5.png'
import Container from 'react-bootstrap/esm/Container'
function Section3() {
    return (
        <div>
            <h1 className='text-center pt-5 pb-5 fw-bold'>Our Products</h1>
            <Container>
                <div className='fw-bold mx-4 pb-4'>Categories</div>
            <OwlCarousel className="text-center" loop margin={6} nav>
                <div class="card">
                    <img src={catToy1} alt='catToy' height='230px'/>
                    <div className='mt-3'><span>Cat's Toy and Goodies</span>
                    <Button style={{float:'right',width:'120px'}} className='fw-bold navButton2'>Learn More</Button></div>
                </div>
                <div class="card">
                    <img src={catToy2} alt='catToy' height='230px' />
                    <div className='mt-3'><span>Cat's Toy and Goodies</span>
                    <Button style={{float:'right',width:'120px'}} className='fw-bold navButton2'>Learn More</Button></div>
                </div>
                <div class="card">
                    <img src={catToy3} alt='catToy' height='230px' />
                    <div className='mt-3'><span>Cat's Toy and Goodies</span>
                    <Button style={{float:'right',width:'120px'}} className='fw-bold navButton2'>Learn More</Button></div>
                </div>
                <div class="card">
                    <img src={catToy4} alt='catToy' height='230px' />
                    <div className='mt-3'><span>Cat's Toy and Goodies</span>
                    <Button style={{float:'right',width:'120px'}} className='fw-bold navButton2'>Learn More</Button></div>
                </div>
                <div class="card">
                    <img src={catToy5} alt='catToy' height='230px' />
                    <div className='mt-3'><span>Cat's Toy and Goodies</span>
                    <Button style={{float:'right',width:'120px'}} className='fw-bold navButton2'>Learn More</Button></div>
                </div>
            </OwlCarousel></Container>
        </div>
    )
}

export default Section3