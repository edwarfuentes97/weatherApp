import React from 'react'
import { IUseApi } from '../hooks/useApi';



const apiHook: IUseApi = {
    getWeatherData:(city:string) => {},
    homeData : [],
}

export const appContext =  React.createContext({ ...apiHook});
