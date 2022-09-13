import { RaceObjModel } from "../../../models/raceObj.model"
import { Calendar } from "./sections/calendar"
import { Category } from "./sections/category"
import { Prize } from "./sections/prize"
import { Results } from "./sections/Results"



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
          default:
            return null
        }
      })()}
        </div>
    )
}