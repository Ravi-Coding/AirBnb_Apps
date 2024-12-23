import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Calculate Weather provides accurate, real-time forecasts to help you plan your day with confidence.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Best Tour Guide offers personalized experiences, expert insights, and seamless journeys to make every trip unforgettable.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Customization lets you tailor experiences, products, or services to meet your unique preferences and needs.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
