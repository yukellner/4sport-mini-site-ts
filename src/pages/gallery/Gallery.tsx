import React, { useEffect, useState } from "react"
import { IEvent } from "../../models/Event"
import { IGallery } from "../../models/Gallery";
import WSPGallery from "./components/WSPGallery";
import { HeaderTitle } from "../../components/HeaderTitle";
import {Button} from "@mui/material";
import styled from "@emotion/styled";

export const Gallery: React.FC<{ event: IEvent, pageHeader: Function }> = ({ event, pageHeader }) => {
  const [galleryImages, setGalleryItems] = useState<IGallery>()
  const [galleryJsonReceived, setGalleryJsonReceived] = useState(true)

  const fetchGallery = async () => {
    try {
      const response = await fetch(`https://www.4sport-live.com/miniSite/gallery?eventId=${event.eventId}`);
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

  const StyledButton = styled(Button)`
    background-color: var(--backgroundColorJson);
    color: var(--white);
    &:hover {
      background-color: ${event.foregroundColor};
      color:${event.backgroundColor};
      outline:1px ${event.backgroundColor} solid;
    }
  `;

  return (
      <div className="main-gallery min-height">
        <HeaderTitle titleText={'גלריה'} />
        {event.gallery &&
            <StyledButton
                onClick={() => window.open(event.gallery, '_blank')}
            >תמונות אישיות</StyledButton>
        }

        {event.generalGallery &&
            <>
              <br/>
              <br/>
              <StyledButton
                  onClick={() => window.open(event.generalGallery, '_blank')}
              >
                תמונות כלליות
              </StyledButton>
            </>
        }


        {galleryImages.gallery.length > 1 ? <WSPGallery galleryImages={galleryImages} /> : <h1 style={{ marginTop: '6rem' }}>תמונות יעלו בקרוב</h1>}
      </div >
  )
}

