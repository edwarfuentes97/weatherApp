import { useState } from "react"
// eslint-disable-netx-line

//Interface de respuesta del api
type response = {
    _index?: string,
    _type?: string,
    _id?: string,
    _score?: any,
    _source?: any,
    sort?: any
}

export interface IUseApi {
    getWeatherData:() => void,
    homeData: any
}


function useApi() {

    const [homeData, setHomeData] = useState([]);
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

    /*Metodo  para obtener los resultados de una busqueda*/
    const getWeatherData = () => {
        const url = `${process.env["REACT_APP_BASE"]}?id=${process.env["REACT_APP_CITY_ID_BOGOTA"]}&appid=${process.env["REACT_APP_API_KEY"]}`;
        getData(url).then((data:any) => {
            if (data) {
                setHomeData(data);
            }
        })
    }


    return {
        getWeatherData,
        homeData,
    }
}

export {
    useApi
}
