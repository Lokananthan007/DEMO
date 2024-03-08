
import React from 'react';
import Aboutimg from '../images/About12.jpg';
function About() {
  return (
    <div id="about">
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
            <div className='col ms-5  mt-auto mb-auto'>
            <h3 className='pt-5 ps-4'>About</h3>
            <h2 className='pt-2 ps-4'>Empowering Smarter Lifestyles</h2>
            <p className='pt-2 ps-4'>
                Demo is a product development company that began in 2020,
                providing automated solutions tailored to clients' needs.
                Our team is having wide knowledge of around 15 years experience in
                electronics and IoT related development.KAR gives clients to feel living in a 
                comfort and secured home and also gives peaceful atmosphere.
            </p>
            </div>
            <div className='col me-5  mt-auto mb-auto'>
                <img src={Aboutimg} alt='about'/>
            </div>
        </div>
    </div>
  );
}

export default About;
