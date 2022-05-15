import React from 'react';

import hero2 from '../../assets/images/hero-1.svg';
import hero1 from '../../assets/images/hero-2.svg';
import vector from '../../assets/images/vector 6.svg';

const index = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="hero-wrapper">
          <h1 className="hero-title">
            Find your
            <span> Flight</span>
          </h1>
          <p className="hero-subtitle">and explore the world with us</p>
        </div>
        <img src={hero1} className="hero-bg-large" alt="Tokyo" />
      </div>
      <div className="col-md-4">
        <div className="hero-image">
          <img src={hero2} className="hero-bg-medium" alt="Tokyo" />
        </div>
        <img src={vector} className="hero-vector" alt="Vector" />
      </div>
    </div>
  );
};

export default index;
