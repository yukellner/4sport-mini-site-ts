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

function App() {
    const [eventObj, setEventObj] = useState<RaceObjModel | any>(null)

    useEffect(() => {
        getJsonFromApi()
    }, [])

    const getJsonFromApi = async () => {
        try {
            const response = await fetch('https://www.4sport-live.com/miniSite/eventData/?comp=3432');
            const responseJson = await response.json();
            setEventObj(Object(responseJson))
            console.log(Object(responseJson))
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    if (!eventObj) return <></>

    return (
        <BrowserRouter >
            <ScrollToTop/>

            <div className="App">
                <AppHeader eventObj={eventObj} />
                <Routes>
                    <Route path='/site/' element={<Home eventObj={eventObj}/>} />
                    <Route path='/site/contact' element={<Contact eventObj={eventObj}/>} />
                    <Route path='/site/enrollment/:description' element={<Enrollment eventObj={eventObj}/>} />
                    <Route path='/site/details' element={<Details eventObj={eventObj}/>} />
                    <Route path='/site/maps' element={<Maps eventObj={eventObj}/>} />
                </Routes>
            </div>

            <Sponsers eventObj={eventObj}/>
            <AppFooter eventObj={eventObj}/>
        </BrowserRouter>
    );
}

export default App;