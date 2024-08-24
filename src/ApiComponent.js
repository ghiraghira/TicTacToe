import React, { useContext, useState } from 'react';
import { Contexto } from './ApiContext'; //llamar al contexto del otro componente
import './ApiStyle.css'

// Definir el componente que consumirá el contexto
const ApiComponent = () => {
    const { Api } = useContext(Contexto); //Uso los datos de la Api y el contexto
    const [buscar, setBuscar] = useState(''); //añado un buscador para usar Api, comienza vacío

    // Una lógica para el botón de búsqueda:
    const botonBuscar = (e) => { //recibe un evento
        // El buscador recibe el evento y actualiza buscar según los datos del input
        setBuscar(e.target.value);
    };
// Al escribir en el input, deben filtrarse los datos en Api por nombre de personajes:
    const apiFiltrada = Array.isArray(Api) ? Api.filter(personaje =>
        // Si Api es un array (para asegurarse de que no de un error específico que me salió)...
        // entonces se va a filtrar en Api cada personaje por su nombre en minúsculas incluyendo lo que sale en buscar en minúsculas
        personaje.name.toLowerCase().includes(buscar.toLowerCase())
    ) : []; //si no, es un array vacío

   

    return (
        <div className='Contenedor-grande'> 
        {/* Hago un gran contenedor para todo, luego hago un input */}
             <input
                    type='text'
                    placeholder='Buscar por nombre...'
                    value={buscar}
                    onChange={botonBuscar}
                    className='barraBuscar'
                />
            <div className='Contenedor'>
               {/* El contenedor contendrá a los digimon */}
                {apiFiltrada.length === 0 ? (
                    // Si la longitud de la Api filtrada por lo puesto en el input es igual a 0...dirá 'no se encuentran los resultados :c'
                    <p>No se encuentran los resultados :c</p>
                ) : (
                    // Si no es igual a 0 (tiene caracteres), entonces...Va a devolver para cada personaje el div carta
                    apiFiltrada.map(personaje => (
                        <div key={personaje.id} className='carta'>
                            <img src={personaje.img} alt={personaje.name} />
                            <h2>{personaje.name}</h2>
                            <p>Level: {personaje.level}</p>
                            
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ApiComponent;