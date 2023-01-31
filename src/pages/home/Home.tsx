import { useEffect } from "react";
import { IEvent } from "../../models/Event";
import { HomePageCmp } from "./home-page-cmp/HomePageCmp";
import { Heats } from "./heats/Heats";
import { EgudCmp } from "./egud-cmp/EgudCmp";

export const Home:React.FC<{event: IEvent, pageHeader: Function}> = ({event, pageHeader}) => {
    useEffect(() => {
        pageHeader("בית")
    }, [])
    
    if (!event) return ( <div className="loader"></div> )
    


    return (
        <div className="min-height">
            <HomePageCmp event={event}/>
            {(event.tavTeken===1) && <EgudCmp event={event}/>}
            <Heats event={event}/>
        </div >
    )
}

