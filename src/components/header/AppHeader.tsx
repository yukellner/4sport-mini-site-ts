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

    var dateString = eventObj.dateTime
    dateString = dateString.slice(0,8)
    dateString = dateString.substr(3, 2) + "/" + dateString.substr(0, 2) + "/" + dateString.substr(6, 4);
    var date = new Date(dateString); // some mock date
    var DATE_IN_MS = date.getTime();

    useEffect(() => {
        updateVaribles()
        window.addEventListener('scroll', scrollEv, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollEv);
        };
    }, [])

    const scrollEv = () => {
        // console.log('scroll event')
        const scrollValue = document.documentElement.scrollTop

        if (scrollValue > 100) {
            setTimerIsShownd(false)
            setPageHederShown(true)
        } else if (scrollValue <= 100) {
            setPageHederShown(false)
            setTimerIsShownd(true)
        }
    }

    const showModal = () => {
        if (window.innerWidth < 640) {
            // setMobileHeader(page)
            const element = document.getElementById("navbar");
            const el1: HTMLElement = element!;
            el1.classList.toggle("visible-class");


            const element2 = document.getElementById("hamburger");
            const el2: HTMLElement = element2!;
            el2.classList.toggle("hide-class");


            const element3 = document.getElementById("close");
            const el3: HTMLElement = element3!;
            el3.classList.toggle("block-class");
        }
    }


    const updateVaribles = () => {
        document.documentElement.style.setProperty('--BackgroundColorJson', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColorJson', eventObj.foregroundColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImage})`);
        document.documentElement.style.setProperty(`--BackgroundColorJson`, eventObj.backgroundColor);
    }

    const basePath = `/site/${codeName}`
    return (
        <>
            <header id="main-header" className="main-header">
                <div className="logo">
                    <li>
                        <NavLink to={`${basePath}/`}>
                            <img src={eventObj.logo} alt={'event logo'} />
                        </NavLink>
                    </li>
                </div>
               {<div className="exist-page">
                    {existPage}
                </div>}
                <div className="navbar" id="navbar">
                    <ul>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/contact`}>צור קשר</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/gallery`}>גלריה</NavLink></li>
                        {/* <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/info`}>רז גוטרמן</NavLink></li> */}
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/maps`}>מפות ומסלולים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/details`}>פרטים מלאים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/enrollment`}>הרשמה</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/`}>בית</NavLink></li>
                    </ul>
                </div>

                <span id="hamburger" onClick={showModal} className="material-icons pointer hamburger">
                    menu
                </span>
                <span id="close" onClick={showModal} className="material-icons pointer close">
                    close
                </span>
                <div className='countdown-container'>
                    <div className="log-in-modal">
                        <h1>{eventObj.date}</h1>
                        {eventObj.status === "registration" ? <Button className='sign-btn-oposite' href={eventObj.registrationUrl} variant="contained">לחץ
                            להרשמה</Button> : <Button className='sign-btn-oposite' href={eventObj.resultsUrl} variant="contained">לחץ
                                לתוצאות</Button>}
                        {timerIsShown && <CountdownTimer targetDate={DATE_IN_MS} />}
                    </div>
                </div>
            </header>
        </>
    )
}