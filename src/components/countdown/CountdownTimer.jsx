import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { UseCountdown } from './useCountdown';


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      
      <p>ההרשמה הסתיימה</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
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

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
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
