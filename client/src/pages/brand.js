import React, { useEffect, useState } from 'react';
import BrandsContainer from '../components/brands-container.js';
import PhoneListByBrand from '../components/one-brand-list.js';
import { getAllBrands } from '../lib/fetch-scrapper.js';

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [phonesByBrandId, setPhonesByBrandId] = useState(undefined);

  const fetchAllBrands = async () => {
    const brandsData = await getAllBrands();
    setBrands(brandsData);
  };

  useEffect(() => {
    fetchAllBrands();
  }, []);

  const handleBrandOnClick = (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    const id = element.getAttribute('href');
    setPhonesByBrandId(id);
  };

  return (
    <>
      <main className="container-brand">
        <section className="left">
          <BrandsContainer
            brands={brands}
            handleBrandOnClick={handleBrandOnClick}
          />
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
          {phonesByBrandId && <PhoneListByBrand id={phonesByBrandId} />}
        </section>
      </main>
    </>
  );
};
export default Brand;
