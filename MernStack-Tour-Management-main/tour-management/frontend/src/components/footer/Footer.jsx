import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'



const quick_links=[
  {
    path:'/home',
    display:'Home'
  }
  ,
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  }
  ,
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]




function footer() {
  const year =new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
           <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime libero ratione itaque perspiciatis ducimus quos dicta, totam tempore ipsam!</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
               <Link to='#'><i class="ri-github-line"></i></Link>
               </span>
               <span>
               <Link to='#'><i class="ri-instagram-fill"></i></Link>
               </span>
               <span>
               <Link to='#'><i class="ri-youtube-fill"></i></Link>
               </span>
               
            </div>
           </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link_title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link_title">Quick links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link_title">Contact</h5>
            <ListGroup className='footer__quick-links'>
              
               
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>
                    <p className='mb-0'>InfoPark Kochi,Kerala</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-fill"></i>
                      </span>
                      Email:
                    </h6>
                    <p className='mb-0'>HykingTours@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-phone-line"></i>
                      </span>
                      Phone:
                    </h6>
                    <p className='mb-0'>987654321</p>
                  </ListGroupItem>
              
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center'>
            <p className="copyright">CopyRight  {year} ,design and develop by HykingTravells.All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer