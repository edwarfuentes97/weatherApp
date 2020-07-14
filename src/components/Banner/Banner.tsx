import React from 'react';
import './Banner.css';

const image = require('../../imgs/sky2.jpg')
const logo_gradi = require('../../imgs/logo_gradiweb.png')


const Banner: React.FC = () => {

		return (
				<>
						<p className={'city_name'}>Bogota</p>
						<img src={image} alt={'img_clima'} className={'img_banner'}/>
						<img src={logo_gradi} alt={'img_clima'} className={'logo_gradi'}/>
						{/*
						<span>Photo by
								<a href="https://unsplash.com/@vidarnm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Vidar Nordli-Mathisen</a> on
								<a href="https://unsplash.com/s/photos/weather?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
						</span>*/
						}
				</>

		)
}

export default Banner;
