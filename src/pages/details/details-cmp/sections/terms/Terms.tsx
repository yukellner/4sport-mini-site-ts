import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../../models/raceObj.model"
import { PdfDownloader } from "./PdfDownloader";



export const Terms: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    



    return (
        <div className="resaluts-container">
            <div>
                <h1>תקנון</h1>
                {/* <h3>{eventObj.comments}</h3> */}
                <PdfDownloader eventObj={eventObj}/>
                
            </div>



        </div >
    )
}