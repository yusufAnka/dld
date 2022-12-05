import React from "react";
import "./card.css";
import ScreenCapture from '../ScreenCapture/ScreenCapture';

function Card({ closeModal, name }) {
  return (
    <>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
             closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>You can Print your Card</h1>
        </div>
        <ScreenCapture name={name} />
      </div>
    </div>

    </>
  );
}

export default Card;

