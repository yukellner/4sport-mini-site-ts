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
import { Enrollment } from './pages/home/enrollment/Enrollment';
import ScrollToTop from "./components/ScrollToTop";
import { Gallery } from "./pages/gallery/Gallery";
import { Info } from "./pages/info/Info";
import Favicon from "react-favicon";



function App() {
    const [eventObj, setEventObj] = useState<RaceObjModel | any>(null)
    const [codeName, setCodeName] = useState<string | null>(null)



    function getCodeName(): string {
        const urlSegments = window.location.href.split('/')
        const siteSegmentIndex = urlSegments.indexOf('site')
        console.log('path', urlSegments[siteSegmentIndex + 1])
        return urlSegments[siteSegmentIndex + 1]
    }

    useEffect(() => {
        const codeName = getCodeName()
        setCodeName(codeName)
        getJsonFromApi(codeName)
    }, [])

    const getJsonFromApi = async (codeName: string) => {
        try {
            const response = await fetch(`https://www.4sport-live.com/miniSite/eventData/?codeName=${codeName}`);
            const responseJson = await response.json();
            setEventObj(Object(responseJson))
            console.log(Object(responseJson))


            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    if (!eventObj) return <div className="loader"></div>
    document.title = eventObj.description

    const basePath = `/site/${codeName}`
    return (
        <BrowserRouter >
            <ScrollToTop />
            <Favicon url={eventObj.logo}></Favicon>




            <div className="App">
                <AppHeader eventObj={eventObj} />
                <Routes>
                    <Route path={`${basePath}/`} element={<Home eventObj={eventObj} />} />
                    <Route path={`${basePath}/contact`} element={<Contact eventObj={eventObj} />} />
                    <Route path={`${basePath}/enrollment`} element={<Enrollment eventObj={eventObj} />} />
                    <Route path={`${basePath}/details`} element={<Details eventObj={eventObj} />} />
                    <Route path={`${basePath}/maps`} element={<Maps eventObj={eventObj} />} />
                    <Route path={`${basePath}/gallery`} element={<Gallery eventObj={eventObj} />} />
                    <Route path={`${basePath}/info`} element={<Info eventObj={eventObj} />} />
                </Routes>
                {eventObj.sponsors && eventObj.sponsors.length !== 0 && <Sponsers eventObj={eventObj} />}
                <AppFooter eventObj={eventObj} />
            </div>

        </BrowserRouter>
    );
}

export default App;