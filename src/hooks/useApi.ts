import { useState } from "react"

//Interface de respuesta del api para controlar acceso de datos al front
type response = {
    main: any
}

export interface IUseApi {
    getWeatherData: () => void,
    getForecastData: () => void,
    getWeatherParisData: () => void,
    getWeatherLyonData: () => void,
    forecastData: any
    homeData: any,
    parisData: any
    lyonData: any
}




function useApi() {

    const [homeData, setHomeData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [parisData, setParisData] = useState([]);
    const [lyonData, setLyonData] = useState([]);
    
    /**
     * Metodo para obtener datos del api por medio de fetch
     * Se puede implementar este metodo para que retorne una promesa y capturarla desde los metodos propios
     * en este caso se hizo con el metodo nativo de js XMLHttpRequest
    
    const getData = async (url: string) => {
        return fetch(url)
            .then((response: any) => response.json())
            .catch(error => {
            });
    }

     */

    /*Metodo  para obtener los resultados de  weather*/
    const getWeatherData = () => {
        const reqGetWeatherData = new XMLHttpRequest();
        
        let ciudad = process.env["REACT_APP_CITY_ID_BOGOTA"]
        const url = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, en`;

        reqGetWeatherData.open('GET', url);
        reqGetWeatherData.send(null);
        reqGetWeatherData.addEventListener("load", () => {
            if (reqGetWeatherData.status === 200) {
                setHomeData(JSON.parse(reqGetWeatherData.responseText));
            }
        });


    }

    const getWeatherParisData = () => {
        const reqGetWeatherParisData = new XMLHttpRequest();
        let ciudad = process.env["REACT_APP_CITY_ID_PARIS"];
        const urlgetWeatherParisData = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        reqGetWeatherParisData.open('GET', urlgetWeatherParisData);
        reqGetWeatherParisData.send(null);
        reqGetWeatherParisData.addEventListener("load", () => {
            if (reqGetWeatherParisData.status === 200) {
                setParisData(JSON.parse(reqGetWeatherParisData.responseText));
            }
        });
        
    }

    const getWeatherLyonData = () => {
        const reqGetWeatherLyonData = new XMLHttpRequest();
        let ciudad = process.env["REACT_APP_CITY_ID_LYON"];
        const urlgetWeatherLyonData = `${process.env["REACT_APP_BASE"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        reqGetWeatherLyonData.open('GET', urlgetWeatherLyonData);
        reqGetWeatherLyonData.send(null);
        reqGetWeatherLyonData.addEventListener("load", () => {
            if (reqGetWeatherLyonData.status === 200) {
                setLyonData(JSON.parse(reqGetWeatherLyonData.responseText));
            }
        });
    }

    /*Metodo  para obtener los resultados de FORECAST */
    const getForecastData = () => {
        const reqGetForecastData = new XMLHttpRequest();
        let ciudad = process.env["REACT_APP_CITY_ID_BOGOTA"];
        const urlgetForecastData = `${process.env["REACT_APP_BASE_FORECAST"]}?id=${ciudad}&appid=${process.env["REACT_APP_API_KEY"]}&lang=sp, es`;
        reqGetForecastData.open('GET', urlgetForecastData);
        reqGetForecastData.send(null);

        reqGetForecastData.addEventListener("load", () => {
            if (reqGetForecastData.status === 200) {
                setForecastData(JSON.parse(reqGetForecastData.responseText));
            }
        });

        
        /* Asi se llamaria la funcion con fetch  */
        // getData(url).then((data: any) => {
        //     if (data) {
        //         setForecastData(data);
        //     }
        // })
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
