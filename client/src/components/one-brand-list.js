import React, { useEffect, useState } from 'react';
import {
  getOneBrandById,
  getAllBrands,
  getPhoneDetails,
} from '../lib/fetch-scrapper.js';

const PhoneListByBrand = ({ id }) => {
  const [phonesByBrand, setphonesByBrand] = useState([]);
  const [brands, setBrands] = useState([]);

    const fetchAllBrands = async () => {
      const brandsData = await getAllBrands();
      console.log(brandsData)
      setBrands(brandsData);
    };
    useEffect(() => {
      fetchAllBrands({});
    }, []);


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
          <h3 className="brand-name"> {`${brands.name}  PHONES`}</h3>
          <p className="brand-sub">
            Select the specific model you are looking for:
          </p>
        </div>
        <div className="wrapper-phone-items">
          {phonesByBrand &&
            phonesByBrand.map((phone) => {
              return (
                <div key={phone.name} className="item-container">
                  <h4>
                    <a
                      href={`./${phone.name}`}
                      key={phone._id}
                      className="phone-item"
                    >
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
