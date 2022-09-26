import { useEffect, useState } from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import { GalleryModel } from "../../models/gallery.model";
import WSPGallery from "./components/WSPGallery";
import { HeaderTitle } from "../../components/HeaderTitle";

export const Gallery: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {

  const [galleryImages, setGalleryItems] = useState<GalleryModel>()

  const getItemsFromJson = async (codeName: string) => {
    try {
      const response = await fetch(`https://www.minisite.4sport-services.com/v1/gallery/${eventObj.eventId}`);
      const responseJson = await response.json();
      setGalleryItems(responseJson)
      console.log(Object(responseJson))
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getItemsFromJson('hello')
    pageHeader("גלריה")
  }, [])

  if (!galleryImages) return (
    <div className="min-height">
      <HeaderTitle titleText={'גלריה'} />
      <div style={{ top: '30%' }} className="lds-ripple"><div></div><div></div></div>
    </div>
  )

  return (
    <div className="main-gallery min-height">
      <HeaderTitle titleText={'גלריה'} />

      {galleryImages.gallery.length > 1 ? <WSPGallery galleryImages={galleryImages} /> : <h1>תמונות יעלו בקרוב</h1>}


    </div >
  )




}

