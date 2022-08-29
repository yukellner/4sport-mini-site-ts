import {useEffect} from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import { SponserCard } from "./componets/sponser-card/SponserCard"


export const Sponsers:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {

    useEffect(() => {
    }, [])

    return (
        
        <div>
            <h1 className="header-large">נותני החסות</h1>
            <div className="sponsers-container">
                {eventObj.sponsors.map(sponser =>
                    <SponserCard key={sponser.description} sponser={sponser}/>
                )}
            </div>
        </div>
    )
}