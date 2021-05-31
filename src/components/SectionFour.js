import React from 'react';
import landingStyles from './Landing.module.scss';
// import styles from './SectionFour.module.scss';

export default function SectionFour() {
  return (
    <div className={landingStyles.fourth_color}>
      <h2>Order your delicious pack now</h2>
      <div className="row m-0 p-0">
        <div className="col">
          <div>
            <div className="row">
              <h4>button</h4>
            </div>
            <div className="row">
              <p>address</p>
            </div>
          </div>
        </div>
        <div className="col">
          <img src="" alt="mango" />
        </div>
      </div>
    </div>
  );
}
