import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-05.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>"This tour was a dream come true! From thrilling hikes to breathtaking views, every detail was
    perfectly planned. I can't wait to book my next adventure!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John D. (Adventure Enthusiast)</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Traveling with kids can be tricky, but this tour made it effortless! The guide was patient,
     and the itinerary was perfect for all ages. A memorable family getaway!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Maria S. (Family Traveler)</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"I’ve always traveled solo, and this was by far my best experience. The team made me
     feel safe and welcomed while ensuring I had the freedom to explore at my pace."</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Alex T. (Solo Explorer)</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"The tour was rich with cultural experiences! From local cuisines to traditional performances,
     it gave me a deep appreciation for the destination. Truly unforgettable!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava04} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Priya K. (Cultural Enthusiast)</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Everything about this tour was top-notch—from the accommodations to the private excursions.
     It was the perfect balance of luxury and adventure. Highly recommend!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava05} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Mark L. (Luxury Seeker)</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
