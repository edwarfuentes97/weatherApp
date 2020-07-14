import React, {useEffect, useContext, useState} from 'react';
import './home.css';
import { appContext } from '../../context/appContext';
import { HOC } from '../../App';
import Banner from "../../components/Banner/Banner";
import Forecast from "../../components/Forecast/Forecast";
const sun_icon = require('../../imgs/icon_sun.svg')
const cloud_icon = require('../../imgs/icon_cloud.svg')
const snow_icon = require('../../imgs/icon_snow.svg')
const rainy_icon = require('../../imgs/icon_rainy_day.svg')

interface ContainerProps {
}

const HomePage: React.FC<ContainerProps> = () => {

  const { getWeatherData , homeData } = useContext(appContext)
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, [update]);


  // Con esta funcion solo se tiene que cambiar el estado para actualizar las consultas al api
  // eslint-disable-next-line
  function fnReload() {
    console.log('actualizar' , update)
    setUpdate(!update)
  }

  function fnIconWetherMain(key: any){
    switch (key) {
      case 'Thunderstorm':
        return rainy_icon

      case 'Drizzle':
        return  rainy_icon

      case 'Rain':
        return rainy_icon

      case 'Snow':
        return snow_icon

      case 'Mist':
        return  cloud_icon;

      case 'Clouds':
        return cloud_icon;

      case 'Clear':
        return sun_icon;

      default:
        return sun_icon
    }
  }
  return (
    <>
      <div className={'main_container'}>
        <Banner />
        {
          homeData.main ? <>
              <div className={'container_main_weater'}>
                <div className="sub_container sub_container_1">
                  <img className={'icon'} src={fnIconWetherMain(homeData.weather[0].main)} alt={'icon'}/>
                </div>
                <div className="sub_container sub_container_2">
                  <span className={'centigrados_icon'}>{Math.round(homeData.main.temp-273.15)}°</span>
                </div>
              </div>
            </>:
            <p> Cargando </p>
        }

        <Forecast />

      </div>

    </>
  );
};

export default HOC(HomePage);
