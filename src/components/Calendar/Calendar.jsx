import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Whisper, Popover } from 'rsuite';
import { getDate } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import WithLayout from '../../layout/withLayout';
import './style.scss';
import { getDataAsync } from '../../store/solar/actions';

// every cell (day) inside of the Callendar
const RenderCell = (date, days) => {
  const [solar, setSolar] = useState({});

  const color = useMemo(() => {
    // Tip: Those lines are hard coded, in real world case i would use
    // something more "algorithmic" and with pattern
    // But as i am working now as a full time Enginner
    // This was best thing i created in very short time.

    const parsedNumber = Math.floor(solar.produced);

    if (parsedNumber > 0 && parsedNumber <= 25) {
      return 'yellow';
    }
    if (parsedNumber > 25) {
      return 'dark-yellow';
    }
    return 'white';
  }, [solar]);

  useEffect(() => {
    if (days[currentDay - 1]) {
      setSolar({
        day: days[currentDay - 1]?.day,
        produced: days[currentDay - 1]?.production,
        consumed: days[currentDay - 1]?.usage,
      });
    }
  }, [days]);

  const currentDay = getDate(date);

  const memorized = useMemo(() => {
    return (
      <Whisper
        placement='top'
        trigger='hover'
        speaker={
          <Popover>
            <div>
              {solar.produced ? (
                <>
                  <p>
                    <b>Produced:</b> {solar.produced.toString().substring(0, 4)} kWh
                  </p>
                  <p>
                    <b>Consumed:</b> {solar.consumed.toString().substring(0, 4)} kWh
                  </p>
                </>
              ) : (
                <p>Noting was produced this day...</p>
              )}
            </div>
          </Popover>
        }>
        <ul className={`calendar-todo-list ${color}`}>
          <li>{currentDay}</li>
        </ul>
      </Whisper>
    );
  }, [solar]);

  return memorized;
};

const SolarCalendar = () => {
  const dispatch = useDispatch();
  const { days } = useSelector((state) => state.solar); // getting solar Data from store

  useEffect(() => {
    dispatch(getDataAsync());
  }, []);

  return (
    <div className='solar-calendar'>
      <Calendar compact bordered renderCell={(date) => RenderCell(date, days)} />
    </div>
  );
};

export default WithLayout(SolarCalendar);
