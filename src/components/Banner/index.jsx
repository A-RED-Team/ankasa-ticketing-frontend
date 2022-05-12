import React from 'react';
import { APP_NAME } from '../../helper/env';

import logo from '../../assets/images/plane.svg';

const index = () => {
  return (
    <div className="col-sm-6 d-none d-sm-block p-0">
      <div className="auth-banner">
        <img src={logo} alt={APP_NAME} />
      </div>
    </div>
  );
};

export default index;
