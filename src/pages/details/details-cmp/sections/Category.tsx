import React from "react";
import {IEvent} from "../../../../models/Event";

export const Category: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <div className="resaluts-container">
            <div className="categories">
                <h1>קטגוריות</h1>
                {event.heats.map(heat =>
                    <div key={heat.description}>
                        {!heat.amami && <h3>מקצה {heat.description}</h3>}
                        {!heat.amami && heat.sections.map(section => <h3
                            key={section.description}>{section.description}</h3>)}
                        <br />
                    </div>
                )}
            </div>
        </div >
    )
}