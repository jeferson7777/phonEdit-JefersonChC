const PhoneContainer = ({ phone, handlePhoneOnClick }) => {
  return (
    <>
      <div className="wrapper-one">
        {brands.map((brand) => {
          return (
            <a
              href={brand.url}
              key={brand.url}
              onClick={handleBrandOnClick}
              className="one-brand"
            >
              <article
                key={brand._id}
                // onClick={handleClick}
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
export default PhoneContainer;
