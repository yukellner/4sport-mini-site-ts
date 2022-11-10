import React, { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { IEvent } from "../../models/Event"

export const Maps: React.FC<{ event: IEvent, pageHeader: Function }> = ({ event, pageHeader }) => {
    useEffect(() => {
        pageHeader("מפות ומסלולים")
    }, [])

    return (
        <div className="main-contact min-height">
            <HeaderTitle titleText={'מפות ומסלולים'} />
            {event.heats.map(heat =>
                <div key={heat.description} className="map-container">
                    <div className="route-header">
                        <h2>{heat.description}</h2>
                    </div>
                    <h3>{heat.routeDescription}</h3>

                    {heat.mapUrl &&
                        <iframe
                            className="alltrails"
                            src={heat.mapUrl}
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running">
                        </iframe>}
                </div>
            )}
        </div>
    )
}