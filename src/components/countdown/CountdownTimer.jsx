import { Button } from '@mui/material';
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { UseCountdown } from './UseCountdown';


const ExpiredNotice = ({eventObj}) => {
  return (
    <div id='show-counter' className="expired-notice  no-reg-counter slide-in-right">
      {/* <Button className='sign-btn-oposite' href={event.resultsUrl} variant="contained">לחץ לתוצאות</Button> */}
    </div>
  );
};

 

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div id='show-counter' className="show-counter slide-in-right">
        <DateTimeDisplay value={days} type={'ימים'} isDanger={days <= 3} />
        {/* <p>:</p> */}
        <DateTimeDisplay value={hours} type={'שעות'} isDanger={false} />
        {/* <p>:</p> */}
        <DateTimeDisplay value={minutes} type={'דקות'} isDanger={false} />
        {/* <p>:</p> */}
        <DateTimeDisplay value={seconds} type={'שניות'} isDanger={false} />
      </div>
  );
};

const CountdownTimer = ({ targetDate, eventObj }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice eventObj={eventObj}/>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
