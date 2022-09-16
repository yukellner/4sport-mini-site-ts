import { useEffect } from "react"
import { RaceObjModel } from "../../models/raceObj.model"
import { Gallery } from "react-grid-gallery";




export const GalleryCopy:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({ eventObj, pageHeader }) => {

   

    useEffect(() => {
        pageHeader("גלריה")
      }, [])

      

      

    return (
        <div >
            gallery
            {/* <Gallery images ={images} /> */}

           

        </div >
    )



    
}

