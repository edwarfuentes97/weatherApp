import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import HomePage from "./pages/home/home";
import { WithContext } from './context/withContext';


function App() {
  return (
      <div className="App">
        <HomePage/>
      </div>
  );
}


export default WithContext(App);

interface HOCP {
  state: boolean;
  callBack: () => void;
}

export function HOC(Component: React.FC<HOCP>)  {
  function rederizate(props: any) {
    return (
        <Component state={false} callBack={() => {}} />
    )
  }
  return rederizate;
}
