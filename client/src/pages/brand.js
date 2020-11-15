import React, { useEffect, useState } from 'react';
import { getAllBrands } from '../lib/fetch-scrapper.js';

const BrandsContainer = () => {
  const [brands, setBrands] = useState([]);

  const fetchAllBrands = async () => {
    const brandsData = await getAllBrands();
    console.log(brandsData);
    setBrands(brandsData);
  };

  useEffect(() => {
    fetchAllBrands();
  }, []);

/*     const handleClick = (event) => {
    event.preventDefault();
    const data = await getAllBrands();
    setBrands(data);
  };
 */

  return (
    <>
      <main className="container-brand">
        <section className="left">
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
                    <p className="one-brand-devices">{`${ brand.devices } devices`}</p>
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
        </section>
      </main>
    </>
  );
};
export default BrandsContainer;

 