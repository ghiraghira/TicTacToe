import React, { createContext, useEffect, useState } from 'react'

// Crear un contexto
const Contexto = createContext();
// Componente donde llamo a la API y recibe el componente hijo
const ApiContext = ({ children }) => {
    // Dónde almacenar los datos de la Api:
    const [Api, setApi] = useState([]);

    // Consumo de la api
    useEffect(() => {
        const ConsumoApi = async () => {
            try {
                const respuesta = await fetch('https://digimon-api.vercel.app/api/digimon'); //llamada a la api
                const resultados = await respuesta.json(); //convertir los datos de la api a json
                setApi(resultados); //los resultados se guardan en el array Api
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }; 
    // Llamo a la Api
        ConsumoApi();
    }, []); //un array vacío para se llame una sola vez que es cuando cargo la página
    

    return (
        // Habrá un contexto que envuelva al componente hijo y reciba los valores de Api
        <Contexto.Provider value={{Api, setApi}}>
            {children}
        </Contexto.Provider>
    )
}

export {ApiContext, Contexto};

