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

  const { getWeatherData , homeData } = useContext(appContext)
  const [update, setUpdate] = useState(false);


  useEffect(() => {
    getWeatherData('bogota');
    // eslint-disable-next-line
  }, [update]);


  function fnReload() {
    console.log('actualizar' , update)
    setUpdate(!update)
  }

  return (
    <>
      {
        homeData ? <>
            <p>Pagina principal </p>
            <button onClick={fnReload} >Actualizar</button>
            <hr/>
            <code>{JSON.stringify(homeData)}</code>
          </>:
          <p>Cargando</p>
      }
    </>
  );
};

export default HOC(HomePage);
