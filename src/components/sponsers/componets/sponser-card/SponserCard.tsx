import { ISponsor } from "../../../../models/Sponsor"
import React from "react";

export const SponsorCard: React.FC<{ sponsor: ISponsor }> = ({ sponsor }) => {
    return (
        <div className="sponsor-card">
            <div className="upper">
                <a className="scale-up-center" href={sponsor.link}>
                    <img src={sponsor.logoUrl} />
                </a>
            </div>
            <div className="bellow">
                <h3>
                    {sponsor.description}
                </h3>
            </div>
        </div>
    )
}