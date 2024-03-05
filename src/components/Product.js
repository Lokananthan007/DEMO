// Product.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import pr1 from '../images/pr1.jpeg';
import pr2 from '../images/pr2.jpeg';
import pr3 from '../images/pr3.jpeg';
import pr4 from '../images/pr4.jpeg';

function Product() {
  const productImages = [pr1, pr2, pr3, pr4];
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-container" id='product'>
      <h1>Product</h1>
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {productImages.map((image, index) => (
          <Card key={index} className="card">
            <Card.Img className="card-img-top" variant="top" src={image} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </Slider>
      <div className="slider-buttons">
        <Button className="prev-button" onClick={() => slider.slickPrev()}>
          <FaChevronLeft />
        </Button>
        <Button className="next-button" onClick={() => slider.slickNext()}>
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default Product;
