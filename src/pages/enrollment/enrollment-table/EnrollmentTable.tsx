import {Button} from "@mui/material"
import { RaceObjModel } from "../../../models/raceObj.model"
import styled from "@emotion/styled"


export const EnrollmentTable:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {

    console.log('heats', eventObj.heats)

    const StyledButton = styled(Button)`
    background-color: ${eventObj.backgroundColor};
    color: ${eventObj.foregroundColor};
    &:hover {
      background-color: ${eventObj.foregroundColor};
      color:${eventObj.backgroundColor};
      outline:1px ${eventObj.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;


    return (
        <div className="enrollment-table">
            <div className="container">

                <h1>טבלת מחירים</h1>
                <table className="top-table">
                    <thead>
                    <tr>
                        <th>
                            <div>
                                הרשמה מאוחרת עד תאריך
                            </div>
                            <div>
                                {eventObj.priceDates[2]}
                            </div>
                        </th>
                        <th>
                            <div>
                                הרשמה רגילה עד תאריך
                            </div>
                            <div>
                                {eventObj.priceDates[1]}
                            </div>
                        </th>
                        <th>
                            <div>
                                הרשמה מוקדמת עד תאריך
                            </div>
                            <div>
                                {eventObj.priceDates[0]}
                            </div>

                        </th>
                        <th>מקצה</th>
                    </tr>


                    </thead>
                    <tbody>
                    {eventObj.heats.map(heat =>
                        <tr key={heat.Rolls}>
                            <td>{heat.prices[2]}₪</td>
                            <td>{heat.prices[1]}₪</td>
                            <td>{heat.prices[0]}₪</td>
                            <td>{heat.description}</td>
                        </tr>
                    )}
                    </tbody>

                </table>
            </div>
            <div className="container">

                <h1>זמני זינוק ומחירים</h1>
                <table className="bottom-table">
                    <thead>
                    <tr>
                        <th>מגיל</th>
                        <th>זמן זינוק</th>
                        <th>מקצה</th>
                    </tr>
                    </thead>
                    <tbody>

                    {eventObj.heats.map(heat =>
                        <tr key={heat.Rolls}>
                            <td>{heat.minAge}</td>
                            <td>{heat.startHeat}</td>
                            <td>{heat.description}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div>
            <StyledButton className="sign-btn" href={eventObj.registrationUrl} 
                sx={{  }}
                variant="contained">לחץ להרשמה</StyledButton>
                {/* <Button className="sign-btn" href={eventObj.participantsListUrl} variant="contained">לחץ להרשמה</Button> */}
            </div>

            <p>
                מה כוללת ההרשמה שלי?
                <br/>
                ערכת השתתפות, סידורי אבטחה, משטרה ורפואה, מדידת מסלול וזמן (מקצה המיני מרתון וה-5 ק"מ לא מדידים).
                <br/>
                לתשומת ליבכם: ההרשמה אינה כוללת חולצת מרתון.
                <br/>
                לקבלת חולצת מרתון איכותית יש לציין זאת בהליך ההרשמה.
                <br/>
                החולצה תהיה חולצת מותג איכותי שיפורסם בהמשך ועלותה 30 ש"ח.
                <br/>
                קבוצות המונות מעל 15 משתתפים יכולות לקבל קוד הנחה באמצעות שירות הלקוחות בטלפון 03-5711575 שלוחה 3 או
                במייל kapaimactive@kapaim.co.il בין השעות 9:00-17:00
                <br/>
                לקוחות דיגיתל זכאים להנחה של 20% בעת ההרשמה.
                <br/>
                אין כפל הנחות
                <br/>
                מהרו להירשם! מספר ההרשמות מוגבל
                <br/>
                במידה והאירוע יתבטל/ יידחה בשל מגיפת הקורונה יתאפשר החזר מלא לנרשמים.
            </p>


        </div>


    )
}


