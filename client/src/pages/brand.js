import React, { useEffect, useState } from 'react';
import BrandsContainer from '../components/brands-container.js';
import PhoneListByBrand from '../components/one-brand-list.js';


const Brand = () => {

  return (
    <>
      <main className="container-brand">
        <section className="left">
          <BrandsContainer />
        </section>
        <section className="right">
          <div className="wrapper-two">
            <h3>SELECT YOUR PHONE AND CHECK INFORMATION</h3>
            <p className="line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              aliquid obcaecati repudiandae assumenda, ipsam ipsum illum, vel
              sapiente non perspiciatis dolorum numquam magni earum veniam
              eligendi quis ipsa, quod accusamus!
            </p>
          </div>
          <PhoneListByBrand />
        </section>
      </main>
    </>
  );
};
export default Brand;

 