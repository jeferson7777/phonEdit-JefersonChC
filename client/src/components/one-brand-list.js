import React, { useEffect, useState } from 'react';
import {
  getOneBrandById,
  getAllBrands,
  getPhoneDetails,
} from '../lib/fetch-scrapper.js';

const PhoneListByBrand = ({ id }) => {
  const [phonesByBrand, setphonesByBrand] = useState([]);
  const [brands, setBrands] = useState([]);
  const [phoneDetail, setPhoneDetail] = useState([]);
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

  const [isClicked, setisClicked] = useState(false);

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

    const fetchPhoneDetails = async (id) => {
      const phoneDetailData = await getPhoneDetails(id);
      setPhoneDetail(phoneDetailData);
    };


    const handlePhoneOnClick = (event) => {
      event.preventDefault();
      const element = event.currentTarget;
      const id = element.getAttribute('href');
      fetchPhoneDetails(id);
      console.log(phoneDetail);

      setisClicked(true);
    };


  useEffect(() => {
    fetchPhonesByBrand(id);
  }, [id]);

  return (
    <>
      <div className="wrapper-three">
        <div className="wrapper-titles">
          <h3 className="brand-name"> {`${brands.name} PHONES`}</h3>
          <p className="brand-sub">
            Select the specific model you are looking for:
          </p>
        </div>
        <div className="wrapper-phone-items">
          {isClicked && <p>{phoneExample.quick_spec.display_size}</p>}
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
