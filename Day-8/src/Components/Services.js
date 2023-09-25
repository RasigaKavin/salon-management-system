// Services.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Services.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderComponent from './HeaderComponent';
import Slider from 'react-slick';
import FooterComponent from './FooterComponent';


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Haircut',
      description: 'Our experienced stylists will provide you with a stylish haircut that suits your personality and preferences.',
      image: 'https://i.pinimg.com/1200x/85/08/4e/85084e0999dcc918fd39e5ed7ff50f1d.jpg'
    },
    {
      title: 'Hair Coloring for Women',
      description: 'Transform your look with our professional hair coloring services. Choose from a wide range of colors and styles.',
      image: 'https://images.pexels.com/photos/1546035/pexels-photo-1546035.jpeg?cs=srgb&dl=pexels-churckyno-bryant-1546035.jpg&fm=jpg'
    },
    {
      title: 'Hair Coloring for Men',
      description: 'Transform your look with our professional hair coloring services tailored specifically for men. Our skilled stylists will help you choose from a wide range of colors and styles, enhancing your appearance.',
      image: 'https://i.pinimg.com/1200x/95/13/ef/9513ef71df8dc3b96d46bc69cc5c0f27.jpg'
    },
    {
      title: 'Bridal Makeup',
      description: 'Get a stunning Bridal Makeup for a wedding. Our experts will style you to perfection.',
      image: 'https://images.pexels.com/photos/2332376/pexels-photo-2332376.jpeg?cs=srgb&dl=pexels-lensation-pictures-2332376.jpg&fm=jpg'
    },
    {
      title: 'Hair Styling',
      description: 'Get a stunning hairstyle for any occasion - be it a party, wedding, or casual day out. Our experts will style your hair to perfection.',
      image: 'https://i.pinimg.com/1200x/7e/5f/0e/7e5f0e271cd01dcda0ce5379fbb5ca01.jpg'
    },
    {
      title: 'Hair Treatment',
      description: 'Revitalize your hair with our rejuvenating hair treatments. Our treatments nourish and strengthen your hair, leaving it healthy and shiny.',
      image: 'https://lukereynolds.com.au/wp-content/uploads/2018/06/art-of-enrichment-565x565.jpg'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div>
      <HeaderComponent />
      <div className="services-container">
      
        <div className="service-card-container">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div
                className={`service-card ${selectedService === index ? 'active' : ''}`}
                key={index}
                onClick={() => handleServiceClick(index)}
              >
                <div className="flipper">
                  <div className="front">
                    <img src={service.image} alt={service.title} />
                    <h3>{service.title}</h3>
                  </div>
                  <div className="back">
                    <h3>{service.description}</h3>
                    <p>Stylists Available</p>
                    <h3>To Book
                    <p>
            <Link to="/appointment">Click here </Link>.
          </p>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Services;