import { useEffect } from "react"
import { RaceObjModel } from "../../models/raceObj.model"



export const Gallery:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({ eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("גלריה")
      }, [])


    return (
        <div >
            gallery
           

        </div >
    )



    
}

