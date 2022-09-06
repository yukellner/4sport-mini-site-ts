import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { RaceObjModel } from "../../models/raceObj.model";
import CountdownTimer from "../countdown/CountdownTimer";


export const AppHeader: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const [timerIsShown, setTimerIsShownd] = useState(true)


    // var NOW_IN_MS = new Date().getTime();
    // var date = new Date("11/21/2022 16:00:00"); // some mock date
    var date = new Date(eventObj.dateTime); // some mock date
    console.log('date',date)
    var DATE_IN_MS = date.getTime();

    useEffect(():any => {
        updateVaribles()
        window.addEventListener('scroll', scrollEv, { passive: true });

        return () => {
            // alert("out")
            // window.removeEventListener('scroll', scrollEv, {passive: true});
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
        const element = document.getElementById("navbar");
        const el1: HTMLElement = element!;
        el1.classList.toggle("visible-class");


        const element2 = document.getElementById("background-div");
        const el2: HTMLElement = element2!;
        el2.classList.toggle("visible-class");
    }






    const updateVaribles = () => {
        document.documentElement.style.setProperty('--backgroundColor', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColor', eventObj.foregroundColor);
        // document.documentElement.style.setProperty('--secondaryColor', eventObj.secondaryColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImages[0]})`);
    }


    // if(!timerIsShown) return


    return (<>
        <div onClick={showModal} id="background-div" className="background-div"></div>
        <header id="main-header" className="main-header">
            <NavLink to='/site/'>
                <div className="logo">
                    <li>
                        <img src={eventObj.logo} />
                    </li>
                </div>
            </NavLink>
            <div className="navbar" id="navbar">
                <ul>
                    <li><NavLink to='/site/contact'>צור קשר</NavLink></li>
                    <li><NavLink to='/site/maps'>מפות ומסלולים</NavLink></li>
                    <li><NavLink to='/site/details'>מידע</NavLink></li>
                    <li><NavLink to={`/site/enrollment/${eventObj.description}`}>הרשמה</NavLink></li>
                    <li><NavLink to='/site/'>בית</NavLink></li>
                </ul>
            </div>
            <span onClick={showModal} className="material-icons pointer hamburger">
                menu
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