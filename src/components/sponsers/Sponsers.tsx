import {useEffect} from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import { SponserCard } from "./componets/sponser-card/SponserCard"


export const Sponsers:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {

    useEffect(() => {
        updateFooteStyling()
    }, [])

    const updateFooteStyling = () =>{

            const element = document.getElementById("footer-container");
            const el1: HTMLElement = element!;
            el1.classList.remove("margin-top-auto");
        
    }

    return (
        
        <div className="sponsers-main-container">
            <h1 className="header-large">נותני החסות</h1>
            <div className="sponsers-container">
                {eventObj.sponsors.map(sponser =>
                    <SponserCard key={sponser.description} sponser={sponser}/>
                )}
            </div>
        </div>
    )
}