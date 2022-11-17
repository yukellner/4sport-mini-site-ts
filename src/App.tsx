import React, { useEffect, useState } from "react";
import './App.css';
import { Home } from './pages/home/Home';
import { IEvent } from './models/Event';
import { AppHeader } from './components/header/AppHeader';
import {Route, Routes, useParams} from 'react-router-dom';
import { Sponsors } from './components/sponsers/Sponsors';
import { AppFooter } from './components/footer/AppFooter';
import { Details } from './pages/details/Details';
import { Contact } from './pages/contact/Contact';
import { Maps } from './pages/maps/Maps';
import { Enrollment } from './pages/enrollment/Enrollment';
import ScrollToTop from "./components/ScrollToTop";
import { Gallery } from "./pages/gallery/Gallery";
import { Info } from "./pages/info/Info";
import Favicon from "react-favicon";
import CountdownTimer from "./components/countdown/CountdownTimer";
import { StatusBtnOposite } from "./components/StatusBtnOposite";

function App() {
    const [event, setEvent] = useState<IEvent | any>(null)
    const [existPage, setExistPage] = useState<string>("Home")
    const {codeName} = useParams();

    const scrollEv = () => {
        const scrollValue = document.documentElement.scrollTop
        if (scrollValue > 50) {
            const element = document.getElementById("show-counter");
            const el1: HTMLElement = element!;
            el1.classList.add("top-0rem");

            const element2 = document.getElementById("log-in-modal");
            const el2: HTMLElement = element2!;
            el2.classList.add("border-bottom-left");

        } else if (scrollValue <= 50) {
            const element = document.getElementById("show-counter");
            const el1: HTMLElement = element!;
            el1.classList.remove("top-0rem");
        }
    }

    const pageHeader = (pageName: string) => {
        setExistPage(pageName)
    }

    useEffect(() => {
        getJsonFromApi()
        window.addEventListener('scroll', scrollEv, {passive: true});

        return () => {
            window.removeEventListener('scroll', scrollEv);
        };
    }, [])

    const getJsonFromApi = async () => {
        try {
            const response = await fetch(`https://www.4sport-live.com/miniSite/eventData/?codeName=${codeName}`);
            const responseJson = await response.json();
            setEvent(Object(responseJson))
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    if (!event) return <div className="lds-ripple">
        <div></div>
        <div></div>
    </div>


    let dateString = event.dateTime;
    dateString = dateString.slice(0, 8)
    dateString = dateString.substr(3, 2) + "/" + dateString.substr(0, 2) + "/" + dateString.substr(6, 4);
    const date = new Date(dateString); // some mock date
    const DATE_IN_MS = date.getTime();

    const myDynamicManifest = {

        "short_name": `${event.description}`,
        "name": `${event.description}`,
        "icons": [
            {
                "src": "favicon.ico",
                "sizes": "64x64 32x32 24x24 16x16",
                "type": "image/x-icon"
            },
            {
                "src": "logo192.png",
                "type": "image/png",
                "sizes": "192x192"
            },
            {
                "src": "logo512.png",
                "type": "image/png",
                "sizes": "512x512"
            }
        ],
        "start_url": `"/${codeName}"`,
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
    };

    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    (document.querySelector('#my-manifest-placeholder') as HTMLAnchorElement).setAttribute('href', manifestURL);
    document.title = event.description

    return (
        <>
            <ScrollToTop/>
            <Favicon url={event.logo}></Favicon>
            <div className="App">
                <div className='countdown-container'>
                    <div id="log-in-modal" className="log-in-modal slide-in-right">
                        <h1>{event.date}</h1>
                        <StatusBtnOposite event={event}/>
                    </div>
                    <div>
                        <CountdownTimer targetDate={DATE_IN_MS} eventObj={event}/>
                    </div>
                </div>
                <AppHeader event={event} existPage={existPage}/>
                <Routes>
                    <Route path={`/`} element={<Home event={event} pageHeader={pageHeader}/>}/>
                    <Route path={`/contact`} element={<Contact event={event} pageHeader={pageHeader}/>}/>
                    <Route path={`/enrollment`} element={<Enrollment event={event} pageHeader={pageHeader}/>}/>
                    <Route path={`/details`} element={<Details target={DATE_IN_MS} event={event} pageHeader={pageHeader}/>}/>
                    {event.showMaps && <Route path={`/maps`} element={<Maps event={event} pageHeader={pageHeader}/>}/>}
                    <Route path={`/gallery`} element={<Gallery event={event} pageHeader={pageHeader}/>}/>
                    {event.customPage && <Route path={`/${event.customPage.name}`} element={<Info event={event} custom={event.customPage} pageHeader={pageHeader}/>}/>}
                </Routes>
                <br/>
                <br/>
                <br/>
                {event.sponsors && event.sponsors.length !== 0 && <Sponsors event={event}/>}
                <AppFooter event={event}/>
            </div>
        </>
    );
}
export default App;
