import { RaceObjModel } from "../../../models/raceObj.model"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFileMedical, faFile, faAward, faVenusMars, faLocationDot, faCommentDots, faStopwatch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { detailsText } from "../../../utils/dictionery-details"
import { DetailsModal } from "./DetailsModal"


export const DetailsContent: React.FC<{ eventObj: RaceObjModel,target: number }> = ({ eventObj, target }) => {

    const [modalText, setModalText] = useState<RaceObjModel | any>(null)
    const [totalprizes, setTotalprizes] = useState<number>(0)

    useEffect(() => {
        checkPrizes()



        return () => {

        };
    }, [])

    const checkPrizes = () => {
        var totalprizes: number = 0
        eventObj.heats.map(heat => heat.prizes.map(prize => totalprizes = totalprizes + prize.nis))
        setTotalprizes(totalprizes)
        // console.log('totalprizes',totalprizes)
    }

    const openModal = (name: string) => {
        const element = document.getElementById("closee");
        const el1: HTMLElement = element!;
        el1.classList.toggle("none-class");
        // console.log(name)
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
                <div onClick={() => openModal("calendar")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faCalendarDays} />
                    <h3>לוז</h3>
                </div>
                {totalprizes > 0 && <div onClick={() => openModal("prize")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faAward} />
                    <h3>פרסים</h3>
                </div>}
                <div onClick={() => openModal("category")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faVenusMars} />
                    <h3>קטגוריות</h3>
                </div>
                { (target < Date.now()) && <div onClick={() => openModal("results")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faStopwatch} />
                    <h3>תוצאות</h3>
                </div>}
                {eventObj.wazeDirection && <div onClick={() => openModal("location")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faLocationDot} />
                    <h3>הגעה</h3>
                </div>}
                {eventObj.termLinks && <div onClick={() => openModal("terms")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faFile} />
                    <h3>תקנון</h3>
                </div>}
                {eventObj.medicalLinks && <div onClick={() => openModal("medical")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faFileMedical} />
                    <h3>הצהרת בריאות</h3>
                </div>}
            </div>






        </div>


    )
}

