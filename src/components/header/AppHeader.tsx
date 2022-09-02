import {Button} from "@mui/material";
import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import { RaceObjModel } from "../../models/raceObj.model";
import CountdownTimer from "../countdown/CountdownTimer";
import {text} from "../../utils/dictionary-management";

export const AppHeader:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {
    const [timerIsShown, setTimerIsShownd] = useState(true)
    const date = new Date("11/21/2022 16:00:00");
    const DATE_IN_MS = date.getTime();

    useEffect(() => {
        updateVaribles()
        window.addEventListener('scroll', scrollEv, {passive: true});
    }, [])

    const scrollEv = () => {
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
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImages[0]})`);
    }

    return (
        <header id="main-header" className="main-header">
            <NavLink to='/' className="logo" >
                    <li>
                        <img src={eventObj.logo} alt=""/>
                    </li>
            </NavLink>
                <ul  className="navbar">
                    <li><NavLink to='/contact'>{text.contact}</NavLink></li>
                    <li><NavLink to='/maps'>{text.contact}</NavLink></li>
                    <li><NavLink to='/details'>{text.information}</NavLink></li>
                    <li><NavLink to={`/enrollment/${eventObj.description}`}>{text.enrollment}</NavLink></li>
                    <li><NavLink to='/'>{text.home}</NavLink></li>
                </ul>
            <div className='countdown-container'>
                <div className="log-in-modal">
                    <h1>{eventObj.date}</h1>
                    <Button className='sign-btn-oposite' href={eventObj.participantsListUrl} variant="contained">{text.clickForRegister}</Button>
                    {timerIsShown && <CountdownTimer targetDate={DATE_IN_MS}/>}
                </div>
            </div>
        </header>
    )
}