import { useEffect } from "react";
import { RaceObjModel } from "../../models/raceObj.model";
import { EnrollmentCmp } from "./enrollment/enrollment-cmp/EnrollmentCmp";
import { Heats } from "./heats/Heats";


export const Home:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({eventObj, pageHeader}) => {

    

    useEffect(() => {
        // console.log('eventobj',eventObj)
        pageHeader("בית")
        // printJSON()
      }, [])

      if (!eventObj) return ( <div className="loader"></div> )

    return (
        <div >
            <EnrollmentCmp eventObj={eventObj}/>
            <Heats eventObj={eventObj}/>

        </div >
    )
}

