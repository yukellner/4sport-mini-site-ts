import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { CustomPageModel } from "../../models/custom.page.model"
import { IEvent } from "../../models/Event"

export const Info: React.FC<{ event: IEvent,custom: CustomPageModel,  pageHeader: Function }> = ({ event, pageHeader, custom }) => {
    useEffect(() => {
        pageHeader("info")
    }, [])

    return (
        <div className="min-height">
            <HeaderTitle titleText={custom.name} />
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