import { useState } from "react"

//Interface de respuesta del api para controlar acceso de datos al front
type response = {
    main:any
}

export interface IUseApi {
    getWeatherData:() => void,
    getForecastData:() => void,
    getWeatherParisData:() => void,
    getWeatherLyonData:() => void,
    forecastData:any
    homeData: any,
    parisData:any
    lyonData:any
}


function useApi() {

    const [homeData, setHomeData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [parisData, setParisData] = useState([]);
    const [lyonData, setLyonData] = useState([]);
    /**
     * Metodo para obtener datos del api
     */
    const getData = async (url: string) => {
        return fetch(url)
          .then((response: any) => response.json())
          .catch(error => {
              console.log(error)
          });
    }

    /*Metodo  para obtener los resultados de  weather*/
    const getWeatherData = () => {
        let ciudad = process.env["REACT_APP_CITY_ID_BOGOTA"]
        const url = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        getData(url).then((data:any) => {
            if (data) {
                setHomeData(data);
            }
        })
    }

    const getWeatherParisData = () => {
        let ciudad = process.env["REACT_APP_CITY_ID_PARIS"];
        const url = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        getData(url).then((data:any) => {
            if (data) {
                setParisData(data)
            }
        })
    }

    const getWeatherLyonData = () => {
        let ciudad = process.env["REACT_APP_CITY_ID_LYON"];
        const url = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        getData(url).then((data:any) => {
            if (data) {
                setLyonData(data)
            }
        })
    }

    /*Metodo  para obtener los resultados de FORECAST */
    const getForecastData = () => {
        let ciudad =  process.env["REACT_APP_CITY_ID_BOGOTA"] ;
        const url = `${process.env["REACT_APP_BASE_FORECAST"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        getData(url).then((data:any) => {
            if (data) {
                setForecastData(data);
            }
        })
    }


    return {
        getWeatherData,
        homeData,
        getForecastData,
        getWeatherParisData,
        getWeatherLyonData,
        forecastData,
        parisData,
        lyonData
    }
}

export {
    useApi
}
