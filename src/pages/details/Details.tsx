import React, { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { IEvent } from "../../models/Event"
import { DetailsContent } from "./details-cmp/DetailsContent"
import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"


export const Details: React.FC<{ event: IEvent, pageHeader: Function, target: number }> = ({ target, event, pageHeader }) => {
    useEffect(() => {
        pageHeader("פרטים מלאים")
    }, [])

    return (
        <div className="details-container min-height">
            <HeaderTitle titleText={'פרטים מלאים'} />
            <div className="content-container">
                <DetailsContent target={target} event={event} />
                <DetailsMainHeader event={event} />
            </div>
            {event.comments.length > 0 && <div className="custom-notes">
                <div className="json-par" dangerouslySetInnerHTML={{ __html: event.comments }} />
            </div>}
        </div >
    )
}