import { RaceObjModel } from "../../../models/raceObj.model"
import { Calendar } from "./sections/Calendar"
import { Category } from "./sections/Category"
import { Location } from "./sections/Location"
import { Prize } from "./sections/Prize"
import { Results } from "./sections/Results"
import { Terms } from "./sections/terms/Terms"



export const DetailsModal: React.FC<{ eventObj: RaceObjModel, modalText: string }> = ({ eventObj, modalText }) => {





    return (
        <div className="details-modal">


            <DynamicComponent eventObj={eventObj} modalText={modalText}/>



        </div >
    )
}


export const DynamicComponent: React.FC<{ eventObj: RaceObjModel, modalText: string }> = ({ eventObj, modalText }) => {


    return(
        <div>
            {(() => {
        switch (modalText) {
          case 'calendar':
            return <Calendar eventObj={eventObj}/>
          case 'results':
            return <Results eventObj={eventObj} />
          case 'category':
            return <Category eventObj={eventObj} />
          case 'prize':
            return <Prize eventObj={eventObj} />
          case 'location':
            return <Location eventObj={eventObj} />
          case 'terms':
            return <Terms eventObj={eventObj} />
          default:
            return null
        }
      })()}
        </div>
    )
}