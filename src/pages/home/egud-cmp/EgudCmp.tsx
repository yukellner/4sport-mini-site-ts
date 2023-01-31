
import { IEvent } from "../../../models/Event"

export const EgudCmp: React.FC<{ event: IEvent }> = ({ event }) => {


    return (
        <div className="egud-box">
            <div className="left-side">
                <img src="https://www.4sport-live.com/media/minisite/7/ydxaUTOYQNwIaPei_Tav_Igud_Haatletika.png" alt="" />
            </div>
            <div className="right-side">
                <h2>
                    המרוץ מוכר כבעל תקן באיגוד האתלטיקה ולכן זוכה לסיוע מקצועי צמוד והכרה רשמית בתוצאותיו.
                    מדידת מסלול המרוץ נעשית ע"י מודד מוסמך מטעם ה - AIMS.
                </h2>
            </div>
        </div>
    )
}