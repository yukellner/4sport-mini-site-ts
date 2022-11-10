import { IEvent } from "../../models/Event"
import React from "react";

export const AppFooter: React.FC<{event:Event}> = ({event}) => {
    return (
        <div id="footer-container" className="footer-container margin-top-auto">
            <div className="footer">
                <a href="http://www.4sport.co.il">
                    2022 כל הזכויות שמורות ל4ספורט בע״מ
                </a>
            </div>
        </div>

    )
}