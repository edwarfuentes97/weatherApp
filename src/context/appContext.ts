import React from 'react'
import { IUseApi } from '../hooks/useApi';



const apiHook: IUseApi = {
    getWeatherData:() => {},
    homeData : [],
}

export const appContext =  React.createContext({ ...apiHook});
