import { RaceObjModel } from "../../../../models/raceObj.model"



export const Prize: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {





    return (
        <div className="resaluts-container">

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



        </div >
    )
}