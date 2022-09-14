import { RaceObjModel } from "../../../models/raceObj.model"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faAward, faVenusMars, faCommentDots, faStopwatch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { detailsText } from "../../../utils/dictionery-details"
import { DetailsModal } from "./details-modal"


export const DetailsContent: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [modalText, setModalText] = useState<RaceObjModel | any>(null)

    const openModal = (name: string) => {
        const element = document.getElementById("closee");
        const el1: HTMLElement = element!;
        el1.classList.toggle("none-class");
        console.log(name)
        setModalText(name)

        const element2 = document.getElementById("details-icons");
        const el2: HTMLElement = element2!;
        el2.classList.toggle("none-class");
        
        const element3 = document.getElementById("details-modal2");
        const el3: HTMLElement = element3!;
        // el3.classList.toggle("details-modal");
        el3.classList.toggle("add-padding");

        
    }




    return (
        <div id="DetailsContent" className="DetailsContent">

            <div className="details-modal2" id="details-modal2">
                <span id="closee" onClick={() => openModal('hello')} className="material-icons pointer none-class">close</span>
                <DetailsModal eventObj={eventObj} modalText={modalText} />
            </div>

            <div id="details-icons" className="details-icons">
                <div>
                    <FontAwesomeIcon onClick={() => openModal("calendar")} className="icon" icon={faCalendarDays} />
                    <h3>לוז</h3>
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => openModal("prize")} className="icon" icon={faAward} />
                    <h3>פרסים</h3>
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => openModal("category")} className="icon" icon={faCommentDots} />
                    <h3>קטגוריות</h3>
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => openModal("results")} className="icon" icon={faStopwatch} />
                    <h3>תוצאות</h3>
                </div>
            </div>
            





        </div>


    )
}

