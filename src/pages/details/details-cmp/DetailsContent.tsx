import { RaceObjModel } from "../../../models/raceObj.model"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faAward, faVenusMars, faCommentDots, faStopwatch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { detailsText } from "../../../utils/dictionery-details"


export const DetailsContent: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [modalText, setModalText] = useState<RaceObjModel | any>(null)

    const openModal = () => {
        setModalText(detailsText.time)

    }



    return (
        <div className="DetailsContent">

            {/* <div dangerouslySetInnerHTML={{__html: modalText}}> */}
            {/* {`<div>${modalText}</div>`} */}
            {/* </div> */}

            {/* <a className="pointer"> */}

            <div className="details-icons">
                <FontAwesomeIcon onClick={openModal} name="calendar" className="icon" icon={faCalendarDays} />
                <FontAwesomeIcon onClick={openModal} name="calendar" className="icon" icon={faAward} />
                <FontAwesomeIcon onClick={openModal} name="calendar" className="icon" icon={faCommentDots} />
                <FontAwesomeIcon onClick={openModal} name="calendar" className="icon" icon={faStopwatch} />
            </div>
            {/* </a> */}

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
            <div className="categories">
                <h1>קטגוריות</h1>
                {eventObj.heats.map(heat =>
                    <div key={heat.description}>
                        <h3>מקצה {heat.description}</h3>
                        {heat.sections.map(section => <h3 key={section.description}>{section.description}</h3>)}
                        <br />


                    </div>
                )}



            </div>
            <div className="prices">
                <h1>פרסים</h1>
                <table>
                    <thead>
                        <tr>
                            <th>מקום שלישי</th>
                            <th>מקום שני</th>
                            <th>מקום ראשון</th>
                            <th>מקצה</th>
                        </tr>
                    </thead>
                    <tbody>

                        {eventObj.heats.map(heat =>
                            <tr key={heat.description}>
                                {heat.prizes.length !== 0 && heat.prizes.map(prize =>
                                    <td key={Math.random()}>₪{prize.nis}</td>
                                )}
                                {heat.prizes.length !== 0 && <td>{heat.description}</td>}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
            <div>
                <h1>הערות</h1>
                <p>

                    {eventObj.comments}

                </p>
            </div>
        </div>


    )
}

