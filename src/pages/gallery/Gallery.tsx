import { useEffect } from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';





export const Gallery: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {


  const onInit = () => {
    console.log('lightGallery has been initialized');
  };



  useEffect(() => {
    pageHeader("גלריה")
  }, [])





  return (
    <div className="main-gallery">



      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href={require("./images/1.jpg")}>
          <img alt="img1" src={require('./images/1.jpg')} />
        </a>
        <a href={require('./images/2.jpg')}>
          <img alt="img2" src={require('./images/2.jpg')} />
        </a>
        ...
      </LightGallery>

      <div className="header-gallery">
        <div>
          <h1 >תמונות יעלו בתום האירוע</h1>
        </div>
      </div>



    </div >
  )




}

