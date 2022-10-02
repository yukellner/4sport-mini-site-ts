import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { RaceObjModel } from "../../models/raceObj.model";
import CountdownTimer from "../countdown/CountdownTimer";


export const AppHeader: React.FC<{ eventObj: RaceObjModel, existPage: string }> = ({ eventObj, existPage }) => {

    const [timerIsShown, setTimerIsShownd] = useState(true)
    const [pageHederShown, setPageHederShown] = useState(false)
    const [mobileHeader, setMobileHeader] = useState()
    const { codeName } = eventObj


    useEffect(() => {
        updateVaribles()

    }, [])

    const showModal = () => {
        if (window.innerWidth < 640) {
            // setMobileHeader(page)
            const element = document.getElementById("navbar");
            const el1: HTMLElement = element!;
            el1.classList.toggle("move-left");


            const element2 = document.getElementById("hamburger");
            const el2: HTMLElement = element2!;
            el2.classList.toggle("none-class");


            const element3 = document.getElementById("close");
            const el3: HTMLElement = element3!;
            el3.classList.toggle("block-class");
        }
        // const element4 = document.getElementById("close1");
        // const el4: HTMLElement = element4!;
        // el4.classList.toggle("block-class");
    }

    const updateVaribles = () => {
        document.documentElement.style.setProperty('--backgroundColorJson', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColorJson', eventObj.foregroundColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImage})`);
        document.documentElement.style.setProperty(`--backgroundColorJson`, eventObj.backgroundColor);
    }

    const basePath = `/site/${codeName}`
    return (
        <>
            <header id="main-header" className="main-header">
                <div className="logo">
                    <li>
                        <NavLink to={`${basePath}/`}>
                            <img className="slide-in-top" src={eventObj.logo} alt={'event logo'} />
                        </NavLink>
                    </li>
                </div>
                {<div className="exist-page">
                    {existPage}
                </div>}
                <div className="navbar" >
                    <ul id="navbar">
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/contact`}>צור קשר</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/gallery`}>גלריה</NavLink></li>
                        {/* <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/info`}>רז גוטרמן</NavLink></li> */}
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/maps`}>מפות ומסלולים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/details`}>פרטים מלאים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/enrollment`}>הרשמה</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/`}>בית</NavLink></li>
                        <span id="close1"  onClick={showModal} className="material-icons pointer close1">
                            close
                        </span>
                    </ul>
                </div>

                <span id="hamburger" onClick={showModal} className="material-icons pointer hamburger">
                    menu
                </span>
                <span id="close" style={{ color: eventObj.backgroundColor }} className="material-icons close">
                    close
                </span>

            </header>
        </>
    )
}