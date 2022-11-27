import React, {createRef} from 'react'
import html2canvas from "html2canvas";
import Flyer from "../Flyer/Flyer";
import './screen.css';

export default class ScreenCapture extends React.Component {
    ref = React.createRef();
  
    handleClickTakeScreenShot = async() => {
      const { cropPositionTop, cropPositionLeft, cropWidth, cropHeight } = {
        cropPositionTop: 0,
        cropPositionLeft: 0,
        cropWidth: 700,
        cropHeight: 530
      };
      console.log("this.ref.current", this.ref.current)
  
      await html2canvas(this.ref.current).then(canvas => {
        let croppedCanvas = document.createElement("canvas");
        let croppedCanvasContext = croppedCanvas.getContext("2d");
  
        console.log("croppedCanvas: ", croppedCanvas)
        croppedCanvas.height = cropHeight;
        croppedCanvas.width = cropWidth;
        //  canvas = {...canvas, width: 1000}
  
        croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);
  
        const a = document.createElement("a");
        a.href = croppedCanvas.toDataURL();
        a.download = "receipt.png";
        a.click();
      });
    };
  
    render() {
      // const { children } = this.props;
  
      return (
        <div>
          {/* {children} */}
          <button className="screenBtn" onClick={this.handleClickTakeScreenShot}>Download Flyer</button>
          <div
            id="#screenshot"
            // style={{ position: "relative", left: "-1000px" }}
            ref={this.ref}
          >
            <Flyer />
          </div>
        </div>
      );
    }
  }