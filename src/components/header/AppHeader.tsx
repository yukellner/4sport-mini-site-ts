import {Button} from "@mui/material";
import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import { RaceObjModel } from "../../models/raceObj.model";
import CountdownTimer from "../countdown/CountdownTimer";


export const AppHeader:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {

    const [timerIsShown, setTimerIsShownd] = useState(true)


    // var NOW_IN_MS = new Date().getTime();
    var date = new Date("11/21/2022 16:00:00"); // some mock date
    // var date = new Date(eventObj.date); // some mock date
    var DATE_IN_MS = date.getTime();

    useEffect(() => {
        updateVaribles()
        window.addEventListener('scroll', scrollEv, {passive: true});

        return () => {
            // window.removeEventListener('scroll', scrollEv, {passive: true});
        }

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


    const updateVaribles = () => {
        document.documentElement.style.setProperty('--backgroundColor', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColor', eventObj.foregroundColor);
        // document.documentElement.style.setProperty('--secondaryColor', eventObj.secondaryColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImages[0]})`);
    }


    // if(!timerIsShown) return


    return (
        <header id="main-header" className="main-header">
            <NavLink to='/'>
                <div className="logo">
                    <li>
                        <img src={eventObj.logo}/>
                    </li>
                </div>
            </NavLink>
            <div className="navbar">
                <ul>
                    <li><NavLink to='/contact'>צור קשר</NavLink></li>
                    <li><NavLink to='/maps'>מפות ומסלולים</NavLink></li>
                    <li><NavLink to='/details'>מידע</NavLink></li>
                    <li><NavLink to={`/enrollment/${eventObj.description}`}>הרשמה</NavLink></li>
                    <li><NavLink to='/'>בית</NavLink></li>
                </ul>
            </div>
            <div className='countdown-container'>
                <div className="log-in-modal">
                    <h1>{eventObj.date}</h1>
                    <Button className='sign-btn-oposite' href={eventObj.participantsListUrl} variant="contained">לחץ
                        להרשמה</Button>
                    {timerIsShown && <CountdownTimer targetDate={DATE_IN_MS}/>}
                </div>
            </div>
        </header>
    )
}