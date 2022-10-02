import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"



export const Info: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {

    useEffect(() => {
        pageHeader("info")
    }, [])



    return (
        <div className="min-height">
            <HeaderTitle titleText={'פרטים'} />
            <div className="main-info info-container">


                <div className="info-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque recusandae dolore laborum tenetur laboriosam nam aspernatur? Nisi dignissimos ea enim quae modi alias deleniti dolorum, aliquam eaque, suscipit dolor!
                </div>
                <div className="img-bottom">
                    <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900"></img>
                </div>
                <div className="img-top">
                    <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900"></img>
                </div>
            </div>
        </div>




       
    )
}