import React from 'react';
import { APP_NAME, APP_VERSION } from '../../../helper/env';

const index = () => {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-inline">
        {APP_NAME} {APP_VERSION}
      </div>
      <strong>
        Copyright &copy; 2022 <a href="">Oploverz Team</a>.
      </strong>{' '}
      All rights reserved.
    </footer>
  );
};

export default index;
