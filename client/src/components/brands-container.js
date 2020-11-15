//import { useLocalStorage } from '../lib/local-storage-hook.js';
import React, { useState } from 'react';
import { getAllBrands } from '../lib/fetch-scrapper.js';

const BrandsContainer = ({ brands }) => {
  const [brands, setBrands] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    const data = await getAllBrands();
    setBrands(data);
  };

  return (
    <>
      {brands.map((brand) => {
        console.log(brand)
        return (
        <div className="wrapper-one">
          <article key={brand._id} onClick={handleClick} id={album._id} className="one-brand">
          <div className="brand">
          <h4 className="one-brand-name">{brand.name}</h4>
          <p className="one-brand-devices">{brand.devices}</p>
          </div>
          </article>
        </div>
        );
      })}
    </>
  );
};

export default BrandsContainer;
