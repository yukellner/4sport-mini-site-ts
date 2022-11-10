import { Button } from "@mui/material";
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { IEvent } from "../../models/Event";


export const AppHeader: React.FC<{ event: IEvent, existPage: string }> = ({ event, existPage }) => {
    const { codeName } = event

    useEffect(() => {
        updateVariables()
    }, [])

    const showModal = () => {
        if (window.innerWidth < 640) {
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
    }

    const updateVariables = () => {
        document.documentElement.style.setProperty('--backgroundColorJson', event.backgroundColor);
        document.documentElement.style.setProperty('--fontColorJson', event.foregroundColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${event.coverImage})`);
        document.documentElement.style.setProperty(`--backgroundColorJson`, event.backgroundColor);
    }

    const basePath = `/${codeName}`
    return (
        <>
            <header id="main-header" className="main-header">
                <div className="logo">
                    <li>
                        <NavLink to={`${basePath}/`}>
                            <img className="slide-in-top" src={event.logo} alt={'event logo'} />
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
                        {event.customPage && <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/${event.customPage.name}`}>{event.customPage.name}</NavLink></li>}
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/maps`}>מפות ומסלולים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/details`}>פרטים מלאים</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/enrollment`}>הרשמה</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? "active-class" : "not-active-class")} onClick={showModal} to={`${basePath}/`}>בית</NavLink></li>
                        <span id="close1" onClick={showModal} className="material-icons pointer close1">
                            close
                        </span>
                    </ul>
                </div>

                <span id="hamburger" onClick={showModal} className="material-icons pointer hamburger">
                    menu
                </span>
                <span id="close" style={{ color: event.backgroundColor }} className="material-icons close">
                    close
                </span>
            </header>
        </>
    )
}