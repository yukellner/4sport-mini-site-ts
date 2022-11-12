import React, { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { IEvent } from "../../models/Event"
import emekHamaynotImage from "../../assets/images/emekhmaynothalfmarthon.jpeg"
export const Maps: React.FC<{ event: IEvent, pageHeader: Function }> = ({ event, pageHeader }) => {
    useEffect(() => {
        pageHeader("מפות ומסלולים")
    }, [])
console.log(event,"event")
    return (
        <div className="main-contact min-height">
            <HeaderTitle titleText={'מפות ומסלולים'} />
            {event.heats.map(heat =>
               heat.showMap===1 &&  <div key={heat.description} className="map-container">
                    <div className="route-header">
                        <h2>{heat.description}</h2>
                    </div>
                    <h3>{heat.routeDescription}</h3>

                    {heat.mapUrl &&
                        heat.mapIframe===1 ?
                        <iframe
                            className="alltrails"
                            src={heat.mapUrl}
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running">
                        </iframe> :<div><img  width={"100%"}  src={emekHamaynotImage} alt={"not iframe"}/>
                        </div>}
                </div>
            )}
        </div>
    )
}
