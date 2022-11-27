import React from "react";
import "./card.css";
import ScreenCapture from '../ScreenCapture/ScreenCapture';
import Flyer from '../Flyer/Flyer'

function Card({ closeModal }) {
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
        <ScreenCapture />
      </div>
    </div>

    </>
  );
}

export default Card;

