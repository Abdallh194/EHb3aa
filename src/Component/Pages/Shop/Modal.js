import React from "react";
import Modal from "react-modal";
function ModalProduct({ item, close }) {
  return (
    <Modal isOpen={item} onRequestClose={close}>
      <div className="Selected-Item">
        <i className="bi bi-x" onClick={close}></i>
        <img src={item.images} alt={item.title} className="img-fluid" />
        <h1>{item.title}</h1>
        <div className="desc">{item.desc}</div>
        <div className="price">{item.price} جنيه</div>
      </div>
    </Modal>
  );
}

export default ModalProduct;
