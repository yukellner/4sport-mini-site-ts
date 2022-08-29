import { SponserModel } from "../../../../models/sponser.model"

export const SponserCard:React.FC<{sponser:SponserModel}> = ({sponser}) => {


    return (
        <div className="sponser-card">
            <a href={sponser.link}>
                <img src={sponser.logoUrl}/>
            </a>
            {sponser.description}
        </div>
    )
}