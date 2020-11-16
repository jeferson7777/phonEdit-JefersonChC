import React, { useEffect, useState } from 'react';
// import BrandsContainer from '../components/brands-container.js';
import PhoneListByBrand from '../components/one-brand-list.js';
import { getAllBrands } from '../lib/fetch-scrapper.js';

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [phonesByBrand, setphonesByBrand] = useState([]);

  const fetchAllBrands = async () => {
    const brandsData = await getAllBrands();
    console.log(brandsData);
    setBrands(brandsData);
  };

  useEffect(() => {
    fetchAllBrands();
  }, []);

  return (
    <>
      <main className="container-brand">
        <section className="left">
          {/* <BrandsContainer /> */}
          <div className="wrapper-one">
            {brands.map((brand) => {
              console.log(brand);
              return (
                <article
                  key={brand._id}
                  // onClick={handleClick}
                  className="one-brand"
                >
                  <div className="brand">
                    <h4 className="one-brand-name">{brand.name}</h4>
                    <p className="one-brand-devices">{`${brand.devices} devices`}</p>
                  </div>
                </article>
              );
            })}
          </div>
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
          {/* <PhoneListByBrand /> */}
          <>
            <div className="wrapper-three">
              <div className="wrapper-titles">
                {/*           <h3 className="brand-name"> {`${brand.name}  PHONES`}</h3>
                 */}{' '}
                <p className="brand-sub">
                  Select the specific model you are looking for:
                </p>
              </div>
              <div className="wrapper-phone-items">
                {phonesByBrand.map((phone, i) => {
                  // console.log(phone);
                  return (
                    <div key={i}>
                      <h4>
                        <a href="./" key={phone._id} className="phone-item">
                          {phone.name}
                        </a>
                      </h4>
                      <div key={phone.img} className="phonepict">
                        {phone.img}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </section>
      </main>
    </>
  );
};
export default Brand;
