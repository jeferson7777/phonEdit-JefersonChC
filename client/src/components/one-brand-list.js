import React, { useEffect, useState } from 'react';
import { getOneBrandById } from '../lib/fetch-scrapper.js';

const PhoneListByBrand = ({ id }) => {
  const [phonesByBrand, setphonesByBrand] = useState([]);

  const fetchPhonesByBrand = async (id) => {
    const phonesByBrandData = await getOneBrandById(id);
    setphonesByBrand(phonesByBrandData);
  };

  useEffect(() => {
    fetchPhonesByBrand(id);
  }, [id]);

  return (
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
          {phonesByBrand &&
            phonesByBrand.map((phone) => {
              return (
                <div key={phone.name}>
                  <h4>
                    <a href="./" key={phone._id} className="phone-item">
                      {phone.name}
                    </a>
                  </h4>
                  <div key={phone.img} className="phonepict">
                    <img src={phone.img} alt={phone.name} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default PhoneListByBrand;
