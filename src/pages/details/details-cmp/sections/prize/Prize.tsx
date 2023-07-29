import React from "react";
import {IEvent} from "../../../../../models/Event";
import {PrizeTable} from "../PrizeTable";
import {PrizeDetails} from "./components/prizeTable/PrizeDetails";

export const Prize: React.FC<{ event: IEvent }> = ({ event }) => {
    console.log(event,"event")
    return (
        <div className="resaluts-container">
            <>
                <h1 style={{width: '100%', textAlign: 'center', textDecoration: 'underline'}}>פרסים</h1>
                <br/>
                {event.heats.map(heat =>
                    !!heat.prizes?.length &&
                    <div style={{width: '100%'}}>
                        <h1 style={{width: '100%', textAlign: 'center', color: 'white'}}>{heat.description}</h1>
                        <div style={{width: '100%', height: '1px', background: 'white', marginTop: '8px', marginBottom: '8px'}}></div>



                        <PrizeDetails prizes={event.heats[0].prizes}/>




                        {/*<div style={{float: 'right'}}>*/}
                        {/*    <PrizeTable  prizes={event.heats[0].prizes} gender={'M'}/>*/}
                        {/*</div>*/}
                        {/*<div style={{float: 'left'}}>*/}
                        {/*    <PrizeTable prizes={event.heats[0].prizes} gender={'F'}/>*/}
                        {/*</div>*/}
                    </div>
                )}
            </>

        </div >
    )
}