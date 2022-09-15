import { useEffect } from "react"
import { RaceObjModel } from "../../models/raceObj.model"



export const Info:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({ eventObj, pageHeader }) => {

    useEffect(() => {
        pageHeader("info")
      }, [])



    return (
        <div >
            info
           

        </div >
    )
}