import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getpokemon } from "./actions";
import LinearProgress from "@mui/material/LinearProgress";
import "./App.css";

function PokeInfo(props) {
  const dispatch = useDispatch();
  const Pokemon = useSelector((state) => state.pokemon);
  console.log("hh", Pokemon.pokemon);

  const requiredData = (data) => {
    return {
      name: data?.name,
      abilities: data?.abilities,
      sprites: data?.sprites,
      stats: data?.stats,
    };
  };

  const pokemon = requiredData(Pokemon.pokemon);

  return (
    <div className="right-container">
      {Object.keys(Pokemon).length !== 0 ? (
        <>
          <h1>{pokemon.name}</h1>
          <div className="img-container1">
            <img src={pokemon.sprites?.back_default} className="img1" alt="" />
            <img src={pokemon.sprites?.front_default} className="img1" alt="" />
            <img src={pokemon.sprites?.back_shiny} className="img1" alt="" />
            <img src={pokemon.sprites?.front_shiny} className="img1" alt="" />
          </div>
          <div className="stats-container">
            {pokemon.stats?.map((stat1) => {
              console.log("stat1", stat1);
              return (
                <>
                  <div>{stat1.stat.name}:</div>
                  <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={stat1.base_stat}
                  />
                </>
              );
            })}
          </div>
        </>
      ) : <h1></h1>}
    </div>
  );
}

export default PokeInfo;
