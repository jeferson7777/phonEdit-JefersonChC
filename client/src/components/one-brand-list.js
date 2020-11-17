import React, { useEffect, useState } from 'react';
import { getOneBrandById, getPhoneDetails } from '../lib/fetch-scrapper.js';
import PhoneContainer from './phone-container.js';

const PhoneListByBrand = ({ id }) => {
  const [phonesByBrand, setphonesByBrand] = useState([]);
  const [phoneDetail, setPhoneDetail] = useState(undefined);

  const [modalIsOpen, setIsOpen] = useState(false);

  const fetchPhonesByBrand = async (id) => {
    const phonesByBrandData = await getOneBrandById(id);
    setphonesByBrand(phonesByBrandData);
  };

  const fetchPhoneDetails = async (id) => {
    const phoneDetailData = await getPhoneDetails(id);
    setPhoneDetail(phoneDetailData);
    setIsOpen(true);
  };

  const handlePhoneOnClick = async (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    const id = element.getAttribute('href');
    await fetchPhoneDetails(id);
  };

  useEffect(() => {
    fetchPhonesByBrand(id);
  }, [id]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <PhoneContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        phoneDetail={phoneDetail}
      />
      <div className="wrapper-three">
        <div className="wrapper-titles">
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
                      href={phone.url}
                      key={phone._id}
                      className="phone-item"
                      onClick={handlePhoneOnClick}
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
