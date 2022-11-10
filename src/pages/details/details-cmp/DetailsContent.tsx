import { IEvent } from "../../../models/Event"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFileMedical, faFile, faAward, faVenusMars, faLocationDot, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { DetailsModal } from "./DetailsModal"

export const DetailsContent: React.FC<{ event: IEvent,target: number }> = ({ event, target }) => {
    const [modalText, setModalText] = useState<Event | any>(null)
    const [totalPrizes, setTotalPrizes] = useState<number>(0)

    useEffect(() => {
        checkPrizes()
    }, [])

    const checkPrizes = () => {
        let totalPrizes: number = 0;
        event.heats.map(heat => heat.prizes.map(prize => totalPrizes = totalPrizes + prize.nis))
        setTotalPrizes(totalPrizes)
    }

    const openModal = (name: string) => {
        const element = document.getElementById("closee");
        const el1: HTMLElement = element!;
        el1.classList.toggle("none-class");
        setModalText(name)

        const element2 = document.getElementById("details-icons");
        const el2: HTMLElement = element2!;
        el2.classList.toggle("none-class");

        const element3 = document.getElementById("details-modal2");
        const el3: HTMLElement = element3!;
        el3.classList.toggle("add-padding");
    }

    return (
        <div id="DetailsContent" className="DetailsContent">
            <div className="details-modal2" id="details-modal2">
                <span id="closee" onClick={() => openModal('hello')} className="material-icons pointer none-class">close</span>
                <DetailsModal event={event} modalText={modalText} />
            </div>
            <div id="details-icons" className="details-icons">
                <div onClick={() => openModal("calendar")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faCalendarDays} />
                    <h3>לוז</h3>
                </div>
                {totalPrizes > 0 && <div onClick={() => openModal("prize")} className="pointer">
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
                {event.wazeDirection && <div onClick={() => openModal("location")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faLocationDot} />
                    <h3>הגעה</h3>
                </div>}
                {event.termLinks && <div onClick={() => openModal("terms")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faFile} />
                    <h3>תקנון</h3>
                </div>}
                {event.medicalLinks && <div onClick={() => openModal("medical")} className="pointer">
                    <FontAwesomeIcon  className="icon" icon={faFileMedical} />
                    <h3>הצהרת בריאות</h3>
                </div>}
            </div>
        </div>
    )
}

