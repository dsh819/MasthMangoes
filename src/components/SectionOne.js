import React from 'react';
import { ReactComponent as Mango } from '../assets/left-mango.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { logoContainer, logo, header, subheader, cta, ctaText } from './SectionOne.module.scss';

export default function SectionOne() {
  return (
    <div className="container h-100">
      <div className="row mb-5 justify-content-start">
        <div className={`${logoContainer} mb-5`}>
          <Logo className={logo} />
        </div>
      </div>
      <div className="row justify-content-between align-items-end">
        <div className="col-md-5">
          <Mango />
        </div>
        <div className="col-md-6">
          <div className={header}>
            <span>
              Sweet & Delicious <br /> Organic Mangoes
            </span>
          </div>
          <div className={subheader}>
            <span>Naturally ripened mangoes without any use of fertilizers and pesticides</span>
          </div>
          <div className="text-right">
            <a href="#order-now" className={cta}>
              <span className={ctaText}>ORDER NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
