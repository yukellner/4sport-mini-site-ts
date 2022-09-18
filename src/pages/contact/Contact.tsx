import styled from "@emotion/styled"
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextareaAutosize,
    TextField
} from "@mui/material"
import { useEffect, useState } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"


export const Contact: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {

    const [newStay, setNewStay] = useState(
        {
            fullName: null,
            roll: null,
            phoneNumber: null,
            email: null,
            competition: eventObj.description,
            content: null
        })

        const StyledTextField = styled(TextField)`
    justify-content: flex-start;
    background-color: var(--white);
    color: ${eventObj.backgroundColor};
    // border: 1px litegreen solid;
    text-align-right;
    &:hover {
      background-color: ${eventObj.foregroundColor};
      color:${eventObj.backgroundColor};
      outline:1px ${eventObj.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;

    useEffect(() => {
        pageHeader("צור קשר")
        
    }, [])
    useEffect(() => {
        console.log(newStay)
        
    }, [newStay])

    const handleChange = (ev: any) => {
        ev.preventDefault()
        const field = ev.target.name
        const value = ev.target.value
        setNewStay({ ...newStay, [field]: value })
    }

    const onSubmit = async (ev: any) => {
        ev.preventDefault()

        try {
            const response = await fetch('https://www.4sport-live.com/miniSite/contact/?eventId=1', {
                method: 'POST',
                body: JSON.stringify({
                    name: newStay.fullName,
                    mobile: newStay.phoneNumber,
                    email: newStay.email,
                    content: newStay.content
                })
            })
            return response
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="main-contact">
            <HeaderTitle titleText={'צור קשר'} />
            <div className="contact-content">
                <div className="contact-img">
                    <img src={eventObj.coverImages[2]} alt="" />

                </div>
                <div className="contact-form">
                    <form id="contact-form" onSubmit={onSubmit} method="POST">
                        <div className="form-group">
                            <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                label="שם מלא" name="fullName" variant="outlined"
                                InputLabelProps={{ style: { color: '#222222' } }} />
                            <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                label="מספר טלפון" name="phoneNumber" variant="outlined"
                                InputLabelProps={{ style: { color: '#222222' } }} />
                            <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic"
                                label="כתובת אימייל" name="email" variant="outlined"
                                InputLabelProps={{ style: { color: '#222222' } }} />
                            <TextField size="small" onChange={(ev) => handleChange(ev)} id="outlined-basic" label="תוכן"
                                multiline rows={4} name="content" variant="outlined"
                                InputLabelProps={{ style: { color: '#222222' } }} />
                            {/* <TextareaAutosize onChange={(ev) => handleChange(ev)} aria-label="תוכן" name="content" style={{ color: '#222222', width: 200 }} placeholder="Maximum 4 rows" /> */}


                        </div>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">מקצה</FormLabel>
                            <RadioGroup onChange={(ev) => handleChange(ev)}
                                name="roll"
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female">
                                {eventObj.heats.map(heat =>
                                    <FormControlLabel onChange={(ev) => handleChange(ev)}  name="roll" key={heat.description} value={heat.description} control={<Radio />}
                                        label={heat.description} />
                                )}
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