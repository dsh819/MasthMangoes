import React from 'react';
import { headingStyle } from './Heading.module.scss';

function heading({ children }) {
  return (
    <div className="row mb-3">
      <div className="col-lg-12 d-flex justify-content-center">
        <h2 className={headingStyle}>{children}</h2>
      </div>
    </div>
  );
}

export default heading;
