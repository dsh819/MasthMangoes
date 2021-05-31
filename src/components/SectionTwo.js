import React from 'react';
import Heading from './Heading';
import {
  contentLeft,
  farmImages,
  farmImageContainer,
  parallelContainer,
  farmImageInner,
} from './SectionTwo.module.scss';
import img1 from '../assets/img1.jpg';

export default function SectionTwo() {
  return (
    <div className="container py-5">
      <Heading>Why Choose Masth Mangoes ?</Heading>
      <div className="row align-items-center py-5">
        <div className="col-12 col-lg-7 d-flex align-items-center">
          <div className={contentLeft}>
            <p>
              We introduce ourselves as this generation farmers residing in Bengaluru, Karnataka
              since it’s the season of the king of fruits that’s MANGOES.
            </p>
            <p>
              We have very good quality of mangoes grown, harvested and ripened completely naturally
              which increases the original taste and quality of the crop also we ensure that all the
              safety and hygiene protocols has taken care.
            </p>
            <p>
              We are selling Badami,Sindhura, Banaganapalli,Raspuri and Totapuri mangoes from our
              farm only. These mangoes are mature, diligently picked and of top quality. No chemical
              fertilisers or pesticides are used in our farm. And no, we do not use Calcium Carbide
              in mango ripening process either. After harvesting, all mangoes are ripened naturally
              before being dispatched.
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className={farmImages}>
            <div className={farmImageContainer}>
              <div className={parallelContainer}>
                <div
                  className={farmImageInner}
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '400px',
                    height: '300px',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
