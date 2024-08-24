import React from "react";
import ReactDOM from "react-dom/client";
import { CharacterContext } from "./CharacterContext";
import CharacterProvider from "./CharacterList";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharacterContext>
      <CharacterProvider/>
    </CharacterContext>
  </React.StrictMode>
);

reportWebVitals();