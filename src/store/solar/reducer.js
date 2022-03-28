import produce from 'immer';
import { getDate, parseISO } from 'date-fns';

import { GET_DATA } from './types';

const initialState = {
  days: [],
};

const solarReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      // after getting the data, we will map and save it in more readable way
      // so after we can use it in UI
      // action.payload === Solar Data Array
      
      action.payload.forEach((item) => {
        const day = getDate(parseISO(item.dateTime)) - 1;

        if (state.days[day]?.production && state.days[day]?.usage) {
          state.days[day] = {
            day: day,
            production: state.days[day].production + parseFloat(item.generationkW),
            usage: state.days[day].usage + parseFloat(item.usagekW),
          };
          return;
        }

        state.days[day] = {
          day: day,
          production: parseFloat(item.generationkW),
          usage: parseFloat(item.usagekW),
        };
      });
      break;
    }
    default:
      return state;
  }
});

export default solarReducer;
