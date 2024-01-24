

import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SerchBar from '../shared/SerchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/image gallery/MasonryImagesGallery'
import Testimonials from '../components/testimonial/Testimonials'


function home() {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'Know before you go'}/>
              <img src={worldImg} />
            </div>
            <h1>Travelling creating the door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur cum excepturi ad dolor quas repudiandae quis quod obcaecati, sunt similique aspernatur quaerat dicta porro eveniet velit magnam optio mollitia?</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg}/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02}/>
            </div>
          </Col>
          <SerchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='service__subtitle'>What We Serve</h5>
            <h2 className='service__title'>We Offer Our Best Services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* fetured section */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle Subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* experience section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
             <div className="experience__content">
              <Subtitle Subtitle={'Experience'}/>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing<br/>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
             </div>

             <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>10K+</span>
                <h6>Succesfull Trips</h6>
              </div>
              <div className="counter__box">
                <span>2K+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>12</span>
                <h6>Years Experience</h6>
              </div>
             </div>
          </Col>
          <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* galary */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* testimonial */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={'Fans Love'}/>
            <h2 className="testimonial__Title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default home