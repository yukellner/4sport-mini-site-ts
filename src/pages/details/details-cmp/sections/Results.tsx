import { RaceObjModel } from "../../../../models/raceObj.model"



export const Results:React.FC<{eventObj:RaceObjModel}> = ({ eventObj }) => {





    return (
        <div className="resaluts-container">

<div>
                <h1>הערות</h1>
                <p>

                    {eventObj.comments}

                </p>
            </div>
           


        </div >
    )
}