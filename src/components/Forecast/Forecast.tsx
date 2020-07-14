import React, { useContext, useEffect } from 'react';
import './Forecast.css';
import { appContext } from "../../context/appContext";

const sun_icon = require('../../imgs/icon_sun.svg')
const cloud_icon = require('../../imgs/icon_cloud.svg')
const snow_icon = require('../../imgs/icon_snow.svg')
const rainy_icon = require('../../imgs/icon_rainy_day.svg')

const paris_img = require('../../imgs/paris.jpg')
const location_icon = require('../../imgs/icon_location.svg')
const museo_img = require('../../imgs/museo.jpg')
const city_img = require('../../imgs/cityAdd.svg')



const Forecast: React.FC = () => {


	const { getForecastData, forecastData, getWeatherParisData, parisData, lyonData, getWeatherLyonData } = useContext(appContext)
	const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


	useEffect(() => {
		getForecastData();
		getWeatherParisData();
		getWeatherLyonData();
		// eslint-disable-next-line
	}, []);

	function fnIconWetherMain(key: any) {
		switch (key) {
			case 'Thunderstorm':
				return rainy_icon

			case 'Drizzle':
				return rainy_icon

			case 'Rain':
				return rainy_icon

			case 'Snow':
				return snow_icon

			case 'Mist':
				return cloud_icon;

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
			<div className={''} id="grid">
				<div id="item1" className={'containers_data'}>
					<p className={'tittle_container_data'}> <b>3 Days</b> Forecast</p>
					{console.log('forecastData', forecastData)}
					{
						forecastData.list ?
							<>
								<div className="forecastContainer">
									<div className="info_container reset">
										<img className={'icon_forecast'} src={fnIconWetherMain(forecastData.list[0].weather[0].main)} alt={'icon'} />
										<p className="subData subData_1"> {dias[new Date(forecastData.list[0].dt_txt).getDay()]}</p>
										<p className="subData"> {forecastData.list[0].weather[0].main}</p>
									</div>
									<div className="max_min_temp ">
										<p className="subDatamin_max"> {Math.round(forecastData.list[0].main.temp_max - 273.15)}°  /  {Math.round(forecastData.list[0].main.temp_min - 273.15)}°</p>
									</div>
								</div>

								<div className="forecastContainer">
									<div className="info_container reset">
										<img className={'icon_forecast'} src={fnIconWetherMain(forecastData.list[8].weather[0].main)} alt={'icon'} />
										<p className="subData subData_1"> {dias[new Date(forecastData.list[8].dt_txt).getDay()]}</p>
										<p className="subData"> {forecastData.list[8].weather[0].main}</p>
									</div>
									<div className="max_min_temp ">
										<p className="subDatamin_max"> {Math.round(forecastData.list[8].main.temp_max - 273.15)}° / {Math.round(forecastData.list[8].main.temp_min - 273.15)}° </p>
									</div>
								</div>

								<div className="forecastContainer">
									<div className="info_container reset">
										<img className={'icon_forecast'} src={fnIconWetherMain(forecastData.list[16].weather[0].main)} alt={'icon'} />
										<p className="subData subData_1"> {dias[new Date(forecastData.list[16].dt_txt).getDay()]}</p>
										<p className="subData"> {forecastData.list[16].weather[0].main}</p>
									</div>
									<div className="max_min_temp ">
										<p className="subDatamin_max"> {Math.round(forecastData.list[16].main.temp_max - 273.15)}°  /  {Math.round(forecastData.list[16].main.temp_min - 273.15)}°</p>
									</div>
								</div>

							</>
							:
							<p>cargando</p>
					}



				</div>

				{
					parisData.weather && lyonData.weather ? <>

						<div id="item2" className={'containers_data'}>
							<p className={'tittle_container_data'}> <b>Place to </b> Visit</p>
							<img src={location_icon} alt={'img_paris'} className={'icon_location_paris'} />
							<img src={paris_img} alt={'img_paris'} className={'img_visit'} />
							<p className={'text_location'}>Paris</p>
							<p className={'text_location text_location_2'}>France</p>
						</div>

						<div id="item3" className={'containers_data'}>

							<div className="recomed recomend1">
								<img src={location_icon} alt={'img_paris'} className={'icon_recomend'} />
								<img src={museo_img} alt={'img_paris'} className={'img_recomend'} />
								<p className={'text_recomed'}>Art Science</p>
								<p className={'text_recomed text_recomed_2'}>Museum</p>
							</div>
							<div className="recomend recomend2">
								<img src={location_icon} alt={'img_paris'} className={'icon_recomend_2'} />
								<img src={museo_img} alt={'img_paris'} className={'img_recomend'} />
								<p className={'text_recomed'}>Photography</p>
								<p className={'text_recomed text_recomed_2'}>Museum of Photography </p>
							</div>

						</div>

						<div id="item4" className={'containers_data'}>

							<div className="container_cities">

								<div className="card_info_cities">
									<div className="info_card_cities">
										<img className={'icon_cities_info'} src={fnIconWetherMain(parisData.weather[0].main)} alt={'icon'} />
										<p className={'txtHumedad'}> Humidity  {Math.round(parisData.main.humidity)}% </p>
									</div>
									<div className="info_card_cities">
										<p className={'txtTittleHumedad'}>  {Math.round(parisData.main.temp - 273.15)}° </p>
										<p className={'txtHumedad'} > {parisData.weather[0].main}</p>
									</div>
									<div className="info_card_cities">
										<p>{parisData.name}</p>
										<p className={'txtHumedad'} > {parisData.weather[0].main}</p>
									</div>
								</div>

								<div className="card_info_cities">
									<div className="info_card_cities">
										<img className={'icon_cities_info'} src={fnIconWetherMain(lyonData.weather[0].main)} alt={'icon'} />
										<p className={'txtHumedad'}> Humidity  {Math.round(lyonData.main.humidity)}% </p>
									</div>
									<div className="info_card_cities">
										<p className={'txtTittleHumedad'}>  {Math.round(lyonData.main.temp - 273.15)}° </p>
										<p className={'txtHumedad'} > {lyonData.weather[0].main}</p>
									</div>
									<div className="info_card_cities">
										<p>{lyonData.name}</p>
										<p className={'txtHumedad'} > {lyonData.weather[0].main}</p>
									</div>
								</div>

								<div className="card_info_cities">
									<div className="add_location_city">
										<button className={'btn_style'}>Add Location</button>
										<img src={city_img} alt={'ciudad'} className={'icon_city_add'} />
									</div>
								</div>

							</div>
						</div>
					</> :
						<p>Cargando</p>
				}


			</div>
		</>
	)
}

export default Forecast;
