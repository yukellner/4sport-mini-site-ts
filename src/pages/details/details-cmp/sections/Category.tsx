import { RaceObjModel } from "../../../../models/raceObj.model"



export const Category: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {





    return (
        <div className="resaluts-container">

            <div className="categories">
                <h1>קטגוריות</h1>
                {eventObj.heats.map(heat =>
                    <div key={heat.description}>
                        {!heat.amami && <h3>מקצה {heat.description}</h3>}
                        {!heat.amami && heat.sections.map(section => <h3
                            key={section.description}>{section.description}</h3>)}
                        <br />
                    </div>
                )}



            </div>



        </div >
    )
}