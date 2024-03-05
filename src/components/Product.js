import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pr1 from '../images/pr1.jpeg';
import pr2 from '../images/pr2.jpeg';
import pr3 from '../images/pr3.jpeg';
import pr4 from '../images/pr4.jpeg';

function Product() {
  const products = [
    {
      id: 1,
      image: pr1,
      title: 'Product 1',
      description: 'Description of Product 1',
    },
    {
      id: 2,
      image: pr2,
      title: 'Product 2',
      description: 'Description of Product 2',
    },
    {
      id: 3,
      image: pr3,
      title: 'Product 3',
      description: 'Description of Product 3',
    },
    {
      id: 4,
      image: pr4,
      title: 'Product 4',
      description: 'Description of Product 4',
    },
  ];

  const items = products.map((product) => (
    <div key={product.id}>
      <div className="product-slide ms-aut me-auto">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  ));

  const settings = {
    dots: true,
    buttonsDisabled: false,
    autoPlay: true,
    autoPlayInterval: 1500,
    mouseTracking: true,
  };

  return (
    <div id='product'>
      <h2>Product</h2>
      <AliceCarousel {...settings}>{items}</AliceCarousel>
    </div>
  );
}

export default Product;
