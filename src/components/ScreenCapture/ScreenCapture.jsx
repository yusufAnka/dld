import React, {createRef} from 'react'
import html2canvas from "html2canvas";
import Flyer from "../Flyer/Flyer";
import './screen.css';

const ScreenCapture = ({name}) => {
    let ref = React.createRef();
    const [width, setWidth] = React.useState()
    const [height, setHeight] = React.useState()

    React.useEffect(() => {
      // let w = 
      setWidth(getComputedStyle(document.documentElement).getPropertyValue('--flyer-width'));
      setHeight(getComputedStyle(document.documentElement).getPropertyValue('--flyer-height'));

    }, [])

  
    let handleClickTakeScreenShot = async() => {
      const { cropPositionTop, cropPositionLeft, cropWidth, cropHeight } = {
        cropPositionTop: 0,
        cropPositionLeft: 0,
        cropWidth:  width,
        cropHeight: height
      };
      console.log("ref.current", ref.current)
  
      await html2canvas(ref.current).then(canvas => {
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

      // const { children } = props;
  
      return (
        <div>
          {/* {children} */}
          <button className="screenBtn" onClick={handleClickTakeScreenShot}>Download Flyer</button>
          <div
            id="#screenshot"
            // style={{ position: "relative", left: "-1000px" }}
            ref={ref}
          >
            <Flyer name={name} />
          </div>
        </div>
      );
    }

    export default ScreenCapture;