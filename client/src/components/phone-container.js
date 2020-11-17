import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PhoneContainer = ({ modalIsOpen, closeModal, phoneDetail }) => {
  return (
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
              {Object.entries(phoneDetail.quick_spec).map(([key, value]) => {
                const formattedKey = key.replace('_', ' ');
                return (
                  <div key={key}>
                    <dt>{formattedKey}</dt>
                    <dd>{value}</dd>
                  </div>
                );
              })}
            </dl>
          </section>
        </>
      )}
    </Modal>
  );
};
export default PhoneContainer;
