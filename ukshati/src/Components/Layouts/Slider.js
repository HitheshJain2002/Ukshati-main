import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Home.css"
import Slider1 from "../Images/sliderimg1.jpeg"
import Slider2 from "../Images/sliderimg2.jpeg"
import Slider3 from "../Images/sliderimg3.jpeg"

const Slider = () => {
  return (
    <>
        <div className="slider">
            <Carousel fade>
              <Carousel.Item interval={1200}>
                <img
                  src={Slider1}
                  className="d-block w-100"
                  alt="First slide"
                  text="First slide"
                />
                <Carousel.Caption>
                  <h3>Automated Irrigation</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  src={Slider2}
                  className="d-block w-100"
                  alt="First slide"
                  text="First slide"
                />
                <Carousel.Caption>
                  <h3>Real Time Monitoring</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  src={Slider3}
                  className="d-block w-100"
                  alt="First slide"
                  text="First slide"
                />
                <Carousel.Caption>
                  <h3>Watering Made Easy</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
    </>
  )
}

export default Slider
