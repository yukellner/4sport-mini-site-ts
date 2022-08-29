import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { useState } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"

export const Contact:React.FC<{eventObj:RaceObjModel}> = ({ eventObj }) => {

    const [newStay, setNewStay] = useState(
        {
            firstName: null,
            lastName: null,
            roll: null,
            email: null,
            competition: eventObj.description


        })



    const handleChange = (ev:any) => {
        ev.preventDefault()
        const field = ev.target.name
        const value = ev.target.value
        console.log(field)
        console.log(value)
        setNewStay({ ...newStay, [field]: value })

        // alert('submit')
    }

    const onSubmit = (ev:any) => {
        ev.preventDefault()
        console.log('state', newStay)
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
                            <TextField onChange={(ev) => handleChange(ev)} id="outlined-basic" label="שם פרטי" name="firstName" variant="outlined" InputLabelProps={{ style: { color: '#222222' } }} />
                            <TextField onChange={(ev) => handleChange(ev)} id="outlined-basic" label="שם משפחה" name="lastName" variant="outlined" InputLabelProps={{ style: { color: '#222222' } }} />
                            <TextField onChange={(ev) => handleChange(ev)} id="outlined-basic" label="כתובת אימייל" name="email" variant="outlined" InputLabelProps={{ style: { color: '#222222' } }} />


                        </div>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">מקצה</FormLabel>
                            <RadioGroup onChange={(ev) => handleChange(ev)}
                                name="roll"
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female">
                                {eventObj.heats.map(heat =>
                                    <FormControlLabel key={heat.description} value={heat.description} control={<Radio />} label={heat.description} />
                                )}
                            </RadioGroup>
                        </FormControl>
                        <Button className="button-border" type="submit" variant="contained">שלח</Button>
                    </form>
                </div>
            </div>



        </div>
    )
}