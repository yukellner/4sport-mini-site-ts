import { IEvent } from "../../models/Event"
import React from "react";

const year = new Date().getFullYear() 

export const AppFooter: React.FC<{event:Event}> = ({event}) => {
    return (
        <div id="footer-container" className="footer-container margin-top-auto">
            <div className="footer">
                <a href="http://www.4sport.co.il">
                    {year} כל הזכויות שמורות ל4ספורט בע״מ
                </a>
            </div>
        </div>

    )
}