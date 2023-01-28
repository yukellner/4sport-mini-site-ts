import React, {useEffect} from "react"
import { IEvent } from "../../models/Event"
import {SponsorCard} from "./componets/sponser-card/SponserCard";

export const Sponsors: React.FC<{event: IEvent}> = ({event}) => {
    useEffect(() => {
        updateFooterStyling()
    }, [])

    const updateFooterStyling = () =>{
        const element = document.getElementById("footer-container");
        const el1: HTMLElement = element!;
        el1.classList.remove("margin-top-auto");
    }

    return (
        <div className="sponsers-main-container">
            <h1 className="header-large">נותני חסות ומציגים באקספו</h1>
            <div className="sponsers-container">
                {event.sponsors.map(sponser =>
                    <SponsorCard key={sponser.description} sponsor={sponser}/>
                )}
            </div>
        </div>
    )
}