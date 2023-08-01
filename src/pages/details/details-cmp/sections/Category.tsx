import React from "react";
import {IEvent} from "../../../../models/Event";

export const Category: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <div className="resaluts-container">
            <div className="categories">
                <h1>קטגוריות</h1>
                {event.heats.map((heat,index) =>
                    <div key={index} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        {!heat.amami && <div style={{paddingBlock:10,marginBottom:5,borderBottom:"1px solid white",marginTop:10,fontSize:24,width: '100%', textAlign: 'center', color: 'white'}}>מקצה {heat.description}</div>}
                        {!heat.amami && heat.sections.map((section,index) =>
                            <div style={{fontSize:22,paddingBlock:2}} key={index}>
                                {section.description}
                            </div>)}
                        <br />
                    </div>
                )}
            </div>
        </div >
    )
}