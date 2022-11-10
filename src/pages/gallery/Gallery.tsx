import React, { useEffect, useState } from "react"
import { IEvent } from "../../models/Event"
import { IGallery } from "../../models/Gallery";
import WSPGallery from "./components/WSPGallery";
import { HeaderTitle } from "../../components/HeaderTitle";

export const Gallery: React.FC<{ event: IEvent, pageHeader: Function }> = ({ event, pageHeader }) => {
  const [galleryImages, setGalleryItems] = useState<IGallery>()
  const [galleryJsonReceived, setGalleryJsonReceived] = useState(true)

  const fetchGallery = async () => {
    try {
      const response = await fetch(`https://www.minisite.4sport-services.com/v1/gallery/${event.eventId}`);
      const responseJson = await response.json();
      setGalleryJsonReceived(true)
      setGalleryItems(responseJson)
      return responseJson;
    } catch (error) {
      setGalleryJsonReceived(false)
      console.error(error);
    }
  }

  useEffect(() => {
    fetchGallery()
    pageHeader("גלריה")
  }, [])

  if (!galleryImages) return (
      <div className="min-height">
        <HeaderTitle titleText={'גלריה'} />
        {galleryJsonReceived ? <div style={{ top: '30vh' }} className="lds-ripple"><div></div><div></div></div> : <h1 style={{ marginTop: '6rem' }}>תמונות יעלו בקרוב</h1>}
      </div>
  )

  return (
      <div className="main-gallery min-height">
        <HeaderTitle titleText={'גלריה'} />
        {galleryImages.gallery.length > 1 ? <WSPGallery galleryImages={galleryImages} /> : <h1 style={{ marginTop: '6rem' }}>תמונות יעלו בקרוב</h1>}
      </div >
  )
}

