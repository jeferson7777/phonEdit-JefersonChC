import React from 'react';

const BrandsContainer = ({ brands, handleBrandOnClick }) => {
  return (
    <>
      <div className="wrapper-one">
        {brands.map((brand) => {
          // console.log(brand);
          return (
            <a href={brand.url} key={brand.url} onClick={handleBrandOnClick}>
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
            </a>
          );
        })}
      </div>
    </>
  );
};
export default BrandsContainer;
