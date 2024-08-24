import React, { createContext, useState, useEffect, children} from "react";

const CharacterContext = createContext();
const CharacterProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon")
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  return (
    <CharacterContext.Provider value={{characters, setCharacters}}>
      {children}
    </CharacterContext.Provider>
  )
}

export {CharacterContext, CharacterProvider};