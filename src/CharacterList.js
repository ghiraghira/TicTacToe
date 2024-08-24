import React, { useContext } from "react";
import { CharacterContext } from "./CharacterContext";

const CharacterList = () => {
  const {characters} = useContext(CharacterContext);

  return (
      <div>
        {characters.map(character => (
          <div key= {character.amiibo}>
          <p>{character.name}</p>
          <img src={character.img} alt={character.name}/>   
          </div>          
        ))}
      </div>
  )
}

export default CharacterList;