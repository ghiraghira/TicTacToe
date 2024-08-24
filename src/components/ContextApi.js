import React, { createContext, useEffect, useState } from 'react'

const CharaContext = createContext();
const CharaProvider = ({ children }) => {
  const [disneyApi, setDisneyApi] = useState([]);
  const fetchDisney = async () => {
    const response = await fetch('https://api.disneyapi.dev/character?films=Pinocchio');
    const results = await response.json(); 
    setDisneyApi(results.data);
  }; 
  useEffect(() => {
    fetchDisney();
  }, []); 
    
  return (
    <CharaContext.Provider value={{disneyApi, setDisneyApi}}>
       {children}
    </CharaContext.Provider>
  )
}

export {CharaContext, CharaProvider};
