import { useEffect, useState } from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import { GalleryModel } from "../../models/gallery.model";
import WSPGallery from "./components/WSPGallery";

export const Gallery: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {

  const [galleryImages, setGalleryItems] = useState<GalleryModel>()

  const getItemsFromJson = async (codeName: string) => {
    try {
      const response = await fetch(`http://54.68.170.169/v1/gallery/${eventObj.eventId}`);
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

  if (!galleryImages) return <div className="lds-ripple"><div></div><div></div></div>

  return (
    <div className="main-gallery">
        <WSPGallery
          galleryImages={galleryImages}
        />
    </div >
  )




}

