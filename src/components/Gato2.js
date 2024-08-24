import React, { useState, useEffect } from "react";
import "./Gato2.css";

function Gato() {
  const [tabs, setTabs] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [empate, setEmpate] = useState(false);
  const [player, setPlayer] = useState("★");
  useEffect(() => {
    document.title = 'Tic-Tac-Toe';
    setWinner();
  }, []);

  const Win = (combis) => {
    let jugadas = {
      wins: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let play in jugadas) {
      jugadas[play].forEach((gato) => {
        if (
          combis[gato[0]] === "" || combis[gato[1]] === "" || combis[gato[2]] === ""         
        ) {}
        else if (
          combis[gato[0]] === combis[gato[1]] && combis[gato[1]] === combis[gato[2]]
        ) {
          setWinner(combis[gato[0]]);
        }
      });
    }
  };
  const handleClick = (i) => {
    if (winner || tabs[i] !== "") 
      return;
    let combis = [...tabs];
    if (player === "★") {
      combis[i] = "★";
      setPlayer("❤︎");
    }
    else {
      combis[i] = "❤︎";
      setPlayer("★");
    }
    Win(combis);
    setTabs(combis);
    if (!combis.includes("") && !winner) {
      setEmpate(true);
    }
  };
  const Casilla = ({i}) => {
    const icono = tabs[i];
    const starHeart = icono ? `casilla icon-${icono}` : "casilla";
    return (
      <td className={starHeart} onClick={() => handleClick(i)}>
        {icono}
      </td>
    );
  };
  const handleReset = () => {
    setWinner();
    setTabs(Array(9).fill(""));
  };
  return (
    <div className="container">
            <button className="resetButton" onClick={handleReset}>
        Start Again
      </button>
      <table className="display">
        <tbody className="tablero">
          <tr>
            <Casilla i={0}/>
            <Casilla i={1}/>
            <Casilla i={2}/>
          </tr>
          <tr>
            <Casilla i={3}/>
            <Casilla i={4}/>
            <Casilla i={5}/>
          </tr>
          <tr>
            <Casilla i={6}/>
            <Casilla i={7}/>
            <Casilla i={8}/>
          </tr>
        </tbody>
      </table>
      <div className={`winner ${winner || empate ? "show" : ""}`}>
        {winner ? `Winner is: ${winner}` : empate? "It's a draw" : ""}
      </div>
    </div>
  );
}

export default Gato;