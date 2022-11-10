import { IEvent } from "../../../../models/Event"
import React from "react";

export const Calendar: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <div className="calendar-container">
            <div className="schedule">
                <h1>לו״ז האירוע</h1>
                <h3>תאריך האירוע: {event.date}</h3>
                <h3>הגעה והתכנסות {event.gatheringTime}</h3>
                <h2>לוז זינוקים</h2>
                <table>
                    <thead>
                    <tr>
                        <th>מקצה</th>
                        <th>שעת זינוק</th>
                    </tr>
                    </thead>
                    <tbody>
                    {event.heats.map(heat =>
                        <tr key={heat.description}>
                            <td>{heat.description}</td>
                            <td>{heat.startHeat}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <h3>טקס סיום וחלוקת פרסים : {event.ceremonyTime}</h3>
            </div>
        </div >
    )
}