import logo from './logo.svg';
import React, { createContext } from 'react';
import './App.css';
import ComC from './Component/ComC';

const userContext = createContext()
const productContext = createContext()


function App() {
  return (
    <div className="App">
   
   <userContext.Provider 
      value={{userName:"Dipu", email:"something@gmail.com"}}>
      <productContext.Provider 
          value={{productName:"Amway", productPrice:30}}>
          <ComC/>
      </productContext.Provider>
   </userContext.Provider>

 
    </div>
  );
}

export default App;
export {productContext, userContext};
