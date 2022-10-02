import { useEffect } from "react"
import { RaceObjModel } from "../../models/raceObj.model"



export const Info:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({ eventObj, pageHeader }) => {

    useEffect(() => {
        pageHeader("info")
      }, [])



    return (
        <div className="main-info min-height">
            <div className="img-top"></div>
            <div className="info-content"></div>
            <div className="img-bottom"></div>
            
           

        </div >
    )
}