import { GET_DATA } from './types';
import { csv } from 'd3-fetch';

export const getData = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const getDataAsync = () => {
  return async (dispatch) => {
    // Getting data from local cvs file
    // I would like to use AWS-Lambda
    // And Puppeteer to download data as PDF after clicking
    // to Calendar Cell, but i am out of time)
		const data = await csv('./solar_data.csv');
    dispatch(getData(data));
  };
};
