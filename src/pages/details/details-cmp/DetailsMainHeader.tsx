import { IEvent } from "../../../models/Event"

export const DetailsMainHeader: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <div className="main-details-container">
            <div className="first-img">
                <i className="fa-solid fa-calendar-days"></i>
                <img src={event.detailsImage} alt="" />
            </div>
        </div>

    )
}