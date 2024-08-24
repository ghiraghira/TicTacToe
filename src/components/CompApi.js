import React, { useContext } from 'react';
import { CharaContext } from './ContextApi'; 
import "./displayApi.css";

const ListComponent = () => {
  const { disneyApi } = useContext(CharaContext); 
  return (
    <div className='container'> 
       <div className='boxes'>
          {disneyApi.map(character => (
            <div key={character.id} className='box'>
            <img src={character.imageUrl} alt={character.name} />
            <h2>{character.name}</h2>          
            </div>
          ))}         
       </div>
    </div>
  );
};

export default ListComponent;