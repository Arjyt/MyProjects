import React from 'react'
import ServiceCard from './ServiceCard';
import {Col, col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
  {
    imgUrl:weatherImg,
    title:'calculate weather',
    desc:'fyuyyyuuioooouuuuubjhui9ufddfd'
  },
  
    {
      imgUrl:guideImg,
      title:'Best Tour Guide',
      desc:'fyuyyyuuioooouuuuubjhui9ufddfd',
    },
    
      {
        imgUrl:customizationImg,
        title:'customization',
        desc:'fyuyyyuuioooouuuuubjhui9ufddfd',
      }
    
  
]

function ServiceList() {
  return (
    <>
    {
      serviceData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
    }
    </>
  )
}

export default ServiceList;