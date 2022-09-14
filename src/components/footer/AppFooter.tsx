import { RaceObjModel } from "../../models/raceObj.model"

export const AppFooter:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {


    return (
        <div className="footer-container">
            <div className="footer">
                <a href="http://www.4sport.co.il">

               2022 כל הזכויות שמורות ל4ספורט בע״מ
                </a>
            </div>
        </div>

    )
}