import React from "react";
import { Modal } from "react-bootstrap";

const YouWin = ({ show, onClick }) => {
  return (
    <Modal show={show} className="you-win-modal" onClick={onClick}>
      <button className="close">
        <span className="float-right close-icon">&times;</span>
      </button>
      <div className="text-center croctastic">Croctastic!</div>
    </Modal>
  );
};

export default YouWin;
