

export const HeaderTitle:React.FC<{titleText:string}> = ({titleText}) => {

   

    return (
        <div className="titleText">
            <h1>{titleText}</h1>
            
        </div>
    )
}