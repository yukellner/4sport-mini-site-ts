import { SponserModel } from "../../../../models/sponser.model"

export const SponserCard: React.FC<{ sponser: SponserModel }> = ({ sponser }) => {


    return (
        <div className="sponser-card">
            <div className="upper">

                <a className="scale-up-center" href={sponser.link}>
                    <img src={sponser.logoUrl} />
                </a>
            </div>
            <div className="bellow">

                <h3>

                    {sponser.description}
                </h3>
            </div>
        </div>
    )
}