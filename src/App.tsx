import React, { useEffect, useState } from "react";
import './App.css';
import { Home } from './pages/home/Home';
import { RaceObjModel } from './models/raceObj.model';
import { AppHeader } from './components/header/AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sponsers } from './components/sponsers/Sponsers';
import { AppFooter } from './components/footer/AppFooter';
import { Details } from './pages/details/Details';
import { Contact } from './pages/contact/Contact';
import { Maps } from './pages/maps/Maps';
import { Enrollment } from './pages/enrollment/Enrollment';
import ScrollToTop from "./components/ScrollToTop";
import { Gallery } from "./pages/gallery/Gallery";
import { Info } from "./pages/info/Info";
import Favicon from "react-favicon";
import { Button } from "@mui/material";
import CountdownTimer from "./components/countdown/CountdownTimer";
import { StatusBtn } from "./components/StatusBtn";
import { StatusBtnOposite } from "./components/StatusBtnOposite";





function App() {
    const [eventObj, setEventObj] = useState<RaceObjModel | any>(null)
    const [codeName, setCodeName] = useState<string | null>(null)
    const [existPage, setExistPage] = useState<string>("Home")
    

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

    function getCodeName(): string {
        const urlSegments = window.location.href.split('/')
        const siteSegmentIndex = urlSegments.indexOf('site')
        return urlSegments[siteSegmentIndex + 1]
    }

    const pageHeader = (pageName: string) => {
        setExistPage(pageName)
    }

    useEffect(() => {
        const codeName = getCodeName()
        setCodeName(codeName)
        getJsonFromApi(codeName)
        window.addEventListener('scroll', scrollEv, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollEv);
        };
    }, [])

    const getJsonFromApi = async (codeName: string) => {
        try {
            const response = await fetch(`https://www.4sport-live.com/miniSite/eventData/?codeName=${codeName}`);
            const responseJson = await response.json();
            setEventObj(Object(responseJson))
            // console.log(Object(responseJson))

            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    if (!eventObj) return <div className="lds-ripple"><div></div><div></div></div>


    var dateString = eventObj.dateTime
    dateString = dateString.slice(0, 8)
    dateString = dateString.substr(3, 2) + "/" + dateString.substr(0, 2) + "/" + dateString.substr(6, 4);
    var date = new Date(dateString); // some mock date
    var DATE_IN_MS = date.getTime();

    var myDynamicManifest = {
        "short_name": "React App",
        "name": "Create React App Sample",
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
        "start_url": `"/site/${codeName}/"`,
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
    }

    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    (document.querySelector('#my-manifest-placeholder') as HTMLAnchorElement).setAttribute('href', manifestURL);

    document.title = eventObj.description

    const basePath = `/site/${codeName}`
    return (
        <BrowserRouter >
            <ScrollToTop />
            <Favicon url={eventObj.logo}></Favicon>
            <div className="App">
                <div className='countdown-container'>
                    <div id="log-in-modal" className="log-in-modal slide-in-right">
                        <h1>{eventObj.date}</h1>
                        <StatusBtnOposite eventObj={eventObj}/>
                    </div>
                    <div >
                        <CountdownTimer targetDate={DATE_IN_MS} eventObj={eventObj} />
                    </div>
                </div>
                <AppHeader eventObj={eventObj} existPage={existPage} />
                <Routes>
                    <Route path={`${basePath}/`} element={<Home eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/contact`} element={<Contact eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/enrollment`} element={<Enrollment eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/details`} element={<Details eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/maps`} element={<Maps eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/gallery`} element={<Gallery eventObj={eventObj} pageHeader={pageHeader} />} />
                    <Route path={`${basePath}/info`} element={<Info eventObj={eventObj} pageHeader={pageHeader} />} />
                </Routes>
                {eventObj.sponsors && eventObj.sponsors.length !== 0 && <Sponsers eventObj={eventObj} />}
                <AppFooter eventObj={eventObj} />
            </div>
        </BrowserRouter>
    );
}

export default App;