import React from 'react';

import logo from '../../../assets/img/vector 3.png';

const index = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img className="animation__wobble" src={logo} alt="AdminLTELogo" height="60" width="60" />
    </div>
  );
};

export default index;
