import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Home1 from'../images/Home1.jpeg';
import Home2 from'../images/Home2.jpg';

function Home() {
  

  return (
    <div id='home'>
      <Carousel fade>
        <Carousel.Item>
          <img
            src={Home1}
            alt="First slide"
            className="img-fluid"
          />
          <Carousel.Caption className="animated-caption">
            <h1>Welcome to Demo</h1>
            <h3>Revolutionizing Home Automation</h3>
            <p>Explore the future of smart living with Demo.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Home2}
            alt="Second slide"
            className="img-fluid"
          />
          <Carousel.Caption className="animated-caption">
            <h1>Your Smart Home</h1>
            <h3>Experience Comfort and Security</h3>
            <p>Control your home with a single touch, from anywhere in the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
