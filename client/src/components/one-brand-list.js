import React, { useEffect, useState } from 'react';
import {
  getOneBrandById,
  getAllBrands,
  getPhoneDetails,
} from '../lib/fetch-scrapper.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PhoneListByBrand = ({ id }) => {
  const [phonesByBrand, setphonesByBrand] = useState([]);
  const [phoneDetail, setPhoneDetail] = useState(undefined);
  const phoneExample = {
    title: 'Huawei P40 lite 5G',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-lite-5g.jpg',
    img_url: 'huawei_p40_lite_5g-pictures-10236.php',
    quick_spec: {
      display_size: '6.5"',
      display_res: '1080x2400 pixels',
      camera_pixels: '64MP\n      ',
      video_pixels: '2160p',
      ram_size: '6GB RAM',
      chipset: 'Kirin 820 5G',
      battery_size: '4000mAh',
      battery_type: 'Li-Po',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const fetchPhonesByBrand = async (id) => {
    const phonesByBrandData = await getOneBrandById(id);
    setphonesByBrand(phonesByBrandData);
  };

  const fetchPhoneDetails = async (id) => {
    const phoneDetailData = await getPhoneDetails(id);
    console.log({ phoneDetailData });
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
      <div className="wrapper-three">
        <div className="wrapper-titles">
          {/* <h3 className="brand-name"> {`${brands.name} PHONES`}</h3> */}
          <p className="brand-sub">
            Select the specific model you are looking for:
          </p>
        </div>
        <div className="wrapper-phone-items">
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalIsOpen && (
              <>
                <button onClick={closeModal}>Close</button>
                <section>
                  <picture>
                    <img src={phoneDetail.img} alt={phoneDetail.title} />
                  </picture>
                  <h3>{phoneDetail.title}</h3>
                  <dl>
                    {Object.entries(phoneDetail.quick_spec).map(
                      ([key, value]) => {
                        const formattedKey = key.replace('_', ' ');
                        return (
                          <div key={key}>
                            <dt>{formattedKey}</dt>
                            <dd>{value}</dd>
                          </div>
                        );
                      },
                    )}
                  </dl>
                </section>
              </>
            )}
          </Modal>
          {phonesByBrand &&
            phonesByBrand.map((phone) => {
              // console.log({ phone });
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

const specs = {
  display_size: '6.0"',
  display_res: '1080x1920 pixels',
  camera_pixels: '13MP',
  video_pixels: '1080p',
  ram_size: '4GB RAM',
  chipset: 'Helio P25',
  battery_size: '4550mAh',
  battery_type: 'Li-Po',
};
