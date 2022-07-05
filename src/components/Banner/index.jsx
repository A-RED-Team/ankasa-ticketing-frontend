import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../helpers/env';

import logo from '../../assets/images/plane.svg';

const index = () => {
  return (
    <div className="col-sm-6 d-none d-sm-block p-0">
      <div className="auth-banner">
        <Link to="/">
          <img src={logo} alt={APP_NAME} />
        </Link>
      </div>
    </div>
  );
};

export default index;
