import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FALSE } from "sass";
import { RaceObjModel } from "../../models/raceObj.model";
import CountdownTimer from "../countdown/CountdownTimer";


export const AppHeader: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [timerIsShown, setTimerIsShownd] = useState(true)
    const [mobileHeader, setMobileHeader] = useState()


    // var NOW_IN_MS = new Date().getTime();
    // var date = new Date("11/21/2022 16:00:00"); // some mock date
    var date = new Date(eventObj.dateTime); // some mock date
    console.log('date', date)
    var DATE_IN_MS = date.getTime();

    useEffect(() => {
        updateVaribles()
        window.addEventListener('scroll', scrollEv, { passive: true });

        return () => {
            // alert("out")
            window.removeEventListener('scroll', scrollEv);
        };

    }, [])

    const scrollEv = () => {
        console.log('scroll event')
        const scrollValue = document.documentElement.scrollTop

        if (scrollValue > 100) {
            setTimerIsShownd(false)
        } else if (scrollValue <= 100) {
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
        document.documentElement.style.setProperty('--backgroundColor', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColorJson', eventObj.foregroundColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImages[0]})`);
        document.documentElement.style.setProperty(`--BackgroundColor`, eventObj.backgroundColor);
    }





    return (<>
            <header id="main-header" className="main-header">
                <NavLink to='/'>
                    <div className="logo">
                        <li>
                            <img src={eventObj.logo} />
                        </li>
                    </div>
                </NavLink>
                <div className="navbar" id="navbar">
                    <ul>
                        <li><NavLink onClick={showModal} to='/site/contact'>צור קשר</NavLink></li>
                        <li><NavLink onClick={showModal} to='/site/maps'>מפות ומסלולים</NavLink></li>
                        <li><NavLink onClick={showModal} to='/site/details'>מידע</NavLink></li>
                        <li><NavLink onClick={showModal} to={`/site/enrollment/${eventObj.description}`}>הרשמה</NavLink></li>
                        <li><NavLink onClick={showModal} to='/site/'>בית</NavLink></li>
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
                        <Button className='sign-btn-oposite' href={eventObj.participantsListUrl} variant="contained">לחץ
                            להרשמה</Button>
                        {timerIsShown && <CountdownTimer targetDate={DATE_IN_MS} />}
                    </div>
                </div>
            </header>
        </>
    )
}