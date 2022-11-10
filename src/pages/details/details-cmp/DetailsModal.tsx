import { IEvent } from "../../../models/Event"
import { Calendar } from "./sections/Calendar"
import { Category } from "./sections/Category"
import { Location } from "./sections/Location"
import { Medical } from "./sections/Medical"
import { Prize } from "./sections/Prize"
import { Results } from "./sections/Results"
import { Terms } from "./sections/Terms"
import React from "react";


export const DetailsModal: React.FC<{ event: IEvent, modalText: string }> = ({ event, modalText }) => {
    return (
        <div className="details-modal">
            <DynamicComponent event={event} modalText={modalText}/>
        </div >
    )
}


export const DynamicComponent: React.FC<{ event: IEvent, modalText: string }> = ({ event, modalText }) => {
    return(
        <div>
            {(() => {
        switch (modalText) {
          case 'calendar':
            return <Calendar event={event}/>
          case 'results':
            return <Results event={event} />
          case 'category':
            return <Category event={event} />
          case 'prize':
            return <Prize event={event} />
          case 'location':
            return <Location event={event} />
          case 'terms':
            return <Terms event={event} />
          case 'medical':
            return <Medical event={event} />
          default:
            return null
        }
      })()}
        </div>
    )
}