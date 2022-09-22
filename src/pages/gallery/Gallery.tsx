import { useCallback, useEffect, useRef, useState } from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgVideo from 'lightgallery/plugins/video';


// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';





export const Gallery: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {


  
  // const arr = Array.from({length: 40}, () =>    "//unsplash.it/200/400" );
  // console.log(arr)

  const lightGallery = useRef<any>(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '14-933',
      src: 'https://res.cloudinary.com/dhy6ndeij/image/upload/v1663570361/Electric/WhatsApp_Image_2022-09-18_at_2.54.21_PM_3_rma7j2.jpg',
      thumb:
        'https://res.cloudinary.com/dhy6ndeij/image/upload/v1663570361/Electric/WhatsApp_Image_2022-09-18_at_2.54.21_PM_3_rma7j2.jpg',
    },
    // {
    //   id: '6',
    //   size: '1280-720',
    //   poster:
    //     'https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg',
    //   src: '//vimeo.com/112836958?muted=false',
    //   thumb:
    //     'https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg',
    //   subHtml: `<div class="lightGallery-captions">
    //             <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
    //             <p>Published on November 13, 2018</p>
    //         </div>`,
    // },
    {
      id: '2',
      size: '1400-933',
      src: 'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      thumb:
        'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                <p>Published on September 14, 2016</p>
            </div>`,
    },
    {
      id: '3',
      size: '1400-932',
      src: 'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
      thumb:
        'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
    } as any,
  ]);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
        >
          <img
            style={{ maxWidth: '280px' }}
            className="img-responsive"
            src={item.thumb}
          />

         
        </a>
      
      );
    });
  }, [items]);

  useEffect(() => {
    // lightGallery.current.refresh();
    // console.log('videl', lgVideo);
  }, [items]);



  useEffect(() => {
    pageHeader("גלריה")
  }, [])





  return (
    <div className="main-gallery">

      {/* <LightGallery
        plugins={[lgVideo, lgZoom]}
        elementClassNames="custom-class-name"
        onInit={onInit}
      >
        {getItems()}
      </LightGallery> */}

      

      <div className="header-gallery">
        <div>
          <h1 >תמונות יעלו בקרוב</h1>
        </div>
      </div>



    </div >
  )




}

