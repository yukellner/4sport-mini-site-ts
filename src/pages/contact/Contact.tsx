import { CacheProvider } from "@emotion/react"
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material"
import { useEffect, useState } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@mui/styles';

export const Contact: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {
    const [newForm, setNewForm] = useState(
        {
            fullName: '',
            roll: '',
            phoneNumber: '',
            email: '',
            competition: eventObj.description,
            content: ''
        })

    const [contentErorr, setContentErorr] = useState(false)

    const theme = createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: `${eventObj.backgroundColor}`
            }

        }
    });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const jss = create({
        plugins: [...jssPreset().plugins, rtl()],
    });

    useEffect(() => {
        pageHeader("צור קשר")

    }, [])

    const handleChange = (ev: any) => {
        ev.preventDefault()
        const field = ev.target.name
        const value = ev.target.value
        setNewForm({ ...newForm, [field]: value })
        // console.log('newForm',newForm)
    }

    const onSubmit = async (ev: any) => {
        ev.preventDefault()
        if (newForm.content.length < 10) {
            setContentErorr(true)
            return
        }
        setContentErorr(false)
        let form = document.getElementById('contact-form')
        if (form) (form as HTMLFormElement).reset();

        modalView()





        try {
            const response = await fetch(`https://www.4sport-live.com/miniSite/contact/?eventId=${eventObj.eventId}`, {
                method: 'POST',
                body: JSON.stringify({
                    name: newForm.fullName,
                    mobile: newForm.phoneNumber,
                    email: newForm.email,
                    content: newForm.content,
                    roll: newForm.roll
                })
            })
            return {

            }
        } catch (error) {
            console.error(error);
        }


    }

    const modalView = () => {
        const element = document.getElementById("msg-modal");
        const el1: HTMLElement = element!;
        el1.classList.toggle("none-class");

        const element2 = document.getElementById("dark-home");
        const el2: HTMLElement = element2!;
        el2.classList.toggle("none-class");
    }


    return (
        <div className="main-contact">
            <div id="dark-home" onClick={modalView} className="contact-modal dark-home none-class"></div>
            <div id="msg-modal" className="msg-modal none-class">
                <span id="closee" onClick={modalView} className="material-icons pointer">close</span>
                <h2 >
                    היי
                    {` ${newForm.fullName}`}
                    <br />
                    פנייתך התקבלה במערכת
                </h2>
            </div>
            <HeaderTitle titleText={'צור קשר'} />
            <div className="contact-content">
                <div className="contact-img">
                    <img src={eventObj.contactImage} alt="" />
                </div>
                <div className="contact-form">
                    <form autoComplete="off" dir="rtl" id="contact-form" onSubmit={onSubmit} method="POST">
                        <div dir="rtl" className="form-group">
                        </div>

                        <ThemeProvider theme={theme}>
                            <div dir="rtl" className="contact-container">
                                <CacheProvider value={cacheRtl}>
                                    <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                        required
                                        // InputProps={{ inputProps: { min: 10, max: 20 } }}
                                        type="phoneNumber"

                                        label="שם מלא"
                                        name="fullName"
                                        variant="outlined"
                                        InputLabelProps={{ style: { color: '#222222' } }}
                                    />
                                </CacheProvider>
                                <CacheProvider value={cacheRtl}>
                                    <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                        required
                                        label="מספר טלפון"
                                        name="phoneNumber"
                                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                                        variant="outlined"
                                        type="tel"
                                        InputLabelProps={{ style: { color: '#222222' } }} />
                                </CacheProvider>
                                <CacheProvider value={cacheRtl}>
                                    <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                        required
                                        label="כתובת אימייל" 
                                        name="email" 
                                        variant="outlined"
                                        type="email"
                                        InputLabelProps={{ style: { color: '#222222' } }} />
                                </CacheProvider>
                                <CacheProvider value={cacheRtl}>
                                    <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic" label="  תוכן (לפחות 10 תווים)"
                                        required
                                        multiline rows={4} name="content" variant="outlined"
                                        InputLabelProps={{ style: { color: '#222222' } }}
                                        error={contentErorr}
                                    />
                                </CacheProvider>

                            </div>
                        </ThemeProvider>
                        <FormControl>
                            <FormLabel className="add-padding" id="demo-radio-buttons-group-label">מקצה *</FormLabel>
                            <RadioGroup onChange={(ev) => handleChange(ev)}
                                name="roll"
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                aria-required
                            >
                                <div dir="rtl" className="contact-container">
                                    {eventObj.heats.map(heat =>
                                        <FormControlLabel onChange={(ev) => handleChange(ev)} name="roll" key={heat.description} value={heat.description} control={<Radio required={true} />}
                                            label={heat.description} />
                                    )}
                                </div>
                            </RadioGroup>
                        </FormControl>
                        <Button className="button-border" type="submit" variant="contained">שלח</Button>
                    </form>
                </div>
            </div>
            <div className="contact-boxes-container">
                <div className="contact-phone contact-box">{eventObj.contactPhone}</div>
                <div className="contact-location contact-box">{eventObj.location}</div>
                <div className="contact-hours contact-box">{eventObj.organizerDetails}</div>
            </div>
        </div>
    )
}