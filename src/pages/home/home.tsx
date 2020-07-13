import React, {useEffect, useContext, useState} from 'react';
import './home.css';
import { appContext } from '../../context/appContext';
import { HOC } from '../../App';
interface ContainerProps {
}

interface Menu {
  title: string;
  slug: string;
}

const HomePage: React.FC<ContainerProps> = () => {

  const { getWeatherData , homeData   } = useContext(appContext)
  const [update, setUpdate] = useState(false);


  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, [update]);


  function fnReload() {
    console.log('actualizar' , update)
    setUpdate(!update)
  }

  return (
    <>
      <p>Pagina principal </p>
      <button onClick={fnReload} >Actualizar</button>
      <hr/>
      <code>{JSON.stringify(homeData)}</code>
    </>
  );
};

export default HOC(HomePage);
