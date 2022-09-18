import { Button } from "@mui/material"
import { RaceObjModel } from "../../../models/raceObj.model"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"


export const EnrollmentTable: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [totalPrice, setTotalPrice] = useState<number>(0)

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

    useEffect(() => {
        checkPrices()



        return () => {

        };
    }, [])

    const checkPrices = () => {
        var totalprices: number = 0
        eventObj.heats.map(heat => heat.prices.map(price => totalprices = totalprices + price))
        setTotalPrice(totalprices)
        console.log('totalprices', totalprices)
    }


    return (
        <div className="enrollment-table">
            {totalPrice != 0 && <div className="container">

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
            </div>}
            <div className="container">

                <h1>זמני זינוק</h1>
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
                                <td>{heat.description}({heat.amami ? `עממי` : `תחרותי`})</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <div>
                <StyledButton className="sign-btn" href={eventObj.registrationUrl}
                    sx={{}}
                    variant="contained">לחץ להרשמה</StyledButton>
                {/* <Button className="sign-btn" href={eventObj.participantsListUrl} variant="contained">לחץ להרשמה</Button> */}
            </div>

          <div className="enrollmentInclude">
            {eventObj.enrollmentInclude}
          </div>


        </div>


    )
}


