import { RaceObjModel } from "../../../models/raceObj.model"
import { useEffect, useState } from "react"


export const EnrollmentTable: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [hasPricesFirst, setHasPricesFirst] = useState<boolean>(false)
    const [hasPricesSeconed, setHasPricesSeconed] = useState<boolean>(false)
    const [hasPricesThird, setHasPricesThird] = useState<boolean>(false)

    useEffect(() => {
        checkPrices()

    }, [])

    const checkPrices = () => {
        var totalprices: number = 0
        eventObj.heats.map((heat) => { heat.prices && heat.prices.map((price) => totalprices = totalprices + price) })
        setTotalPrice(totalprices)
        totalprices = 0
        eventObj.heats.map(heat => { heat.prices && (totalprices = totalprices + heat.prices[0]) })
        setHasPricesFirst(totalprices > 0)
        totalprices = 0
        eventObj.heats.map(heat => { heat.prices && (totalprices = totalprices + heat.prices[1]) })
        setHasPricesSeconed(totalprices > 0)
        totalprices = 0
        eventObj.heats.map(heat => { heat.prices && (totalprices = totalprices + heat.prices[2]) })
        setHasPricesThird(totalprices > 0)
    }

    return (
        <div className="enrollment-table">
            {totalPrice != 0 && <div className="container">
                <h1>טבלת מחירים</h1>
                <table className="top-table">
                    <thead>
                        <tr>
                            {hasPricesThird && <th>
                                <div>
                                    הרשמה מאוחרת עד תאריך
                                </div>
                                <div>
                                    {eventObj.priceDates[2]}
                                </div>
                            </th>}
                            {hasPricesSeconed && <th>
                                <div>
                                    הרשמה רגילה עד תאריך
                                </div>
                                <div>
                                    {eventObj.priceDates[1]}
                                </div>
                            </th>}
                            {hasPricesFirst && <th>
                                <div>
                                    הרשמה מוקדמת עד תאריך
                                </div>
                                <div>
                                    {eventObj.priceDates[0]}
                                </div>

                            </th>}
                            <th>מקצה</th>
                        </tr>
                    </thead>
                    {eventObj.heats.map((heat, index) =>
                        <tbody key={index}>
                            {heat.prices && <tr >
                                {hasPricesThird && <td>{heat.prices[2]}₪</td>}
                                {hasPricesSeconed && <td>{heat.prices[1]}₪</td>}
                                {hasPricesFirst && <td>{heat.prices[0]}₪</td>}
                                <td>{heat.description}</td>
                            </tr>}
                        </tbody>
                    )}

                </table>
            </div>}

            <div className="container">

                <h1>זמני זינוק</h1>
                <table className="bottom-table">
                    <thead>
                        <tr>
                            <th>מגיל</th>
                            <th>זמן זינוק</th>
                            <th>סוג</th>
                            <th>מקצה</th>
                        </tr>
                    </thead>
                    <tbody>

                        {eventObj.heats.map((heat, index) =>
                            <tr key={index}>
                                <td>{heat.minAge}</td>
                                <td>{heat.startHeat}</td>
                                <td>{heat.amami ? `עממי` : `תחרותי`}</td>
                                <td>{heat.description}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <div>
                {eventObj.showParticipants != 0 && <div>
                    <a href={eventObj.participantsListUrl}>
                        <button className="main-btn reverse-color">לחץ לרשימת המשתתפים</button>
                    </a>
                </div>}
                <br />
                <div>
                    {(eventObj.status === 'registration') ?
                        <a href={eventObj.registrationUrl}>
                            <button className="main-btn reverse-color">לחץ להרשמה</button>
                        </a>
                        :
                        <h2>ההרשמה הסתיימה</h2>}
                </div>
            </div>

            <div>
                {eventObj.isRegistrationInEventDay ?
                    <h3>קיימת הרשמה במקום ביום האירוע <span>
                        *
                    </span></h3>
                    :
                    <h3>לא תתאפשר הרשמה במקום ביום האירוע <span >
                        *
                    </span></h3>}
            </div>
            <div className="enrollmentInclude">
                {eventObj.enrollmentInclude}
            </div>
        </div>


    )
}


