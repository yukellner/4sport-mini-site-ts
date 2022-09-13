import { RaceObjModel } from "../../../../models/raceObj.model"



export const Calendar:React.FC<{eventObj:RaceObjModel}> = ({ eventObj }) => {





    return (
        <div className="resaluts-container">

<div className="schedule">
                <h1>לוז אירוע</h1>
                <h3>תאריך האירוע: {eventObj.date}</h3>
                <h3>הגעה והתכנסות {eventObj.gatheringTime}</h3>
                <h2>לוז זינוקים</h2>
                <table>
                    <thead>
                        <tr>
                            <th>מקצה</th>
                            <th>שעת זינוק</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventObj.heats.map(heat =>
                            <tr key={heat.description}>
                                <td>{heat.description}</td>
                                <td>{heat.startHeat}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <h3>טקס סיום וחלוקת פרסים : {eventObj.ceremonyTime}</h3>
            </div>
           


        </div >
    )
}