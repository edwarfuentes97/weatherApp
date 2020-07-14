import React from 'react'
import { IUseApi } from '../hooks/useApi';



const apiHook: IUseApi = {
    getWeatherData:() => {},
    getForecastData:() => {},
    getWeatherParisData:() => {},
    getWeatherLyonData:() => {},
    forecastData:[],
    homeData: [],
    parisData: [],
    lyonData: []

}

export const appContext =  React.createContext({ ...apiHook});
