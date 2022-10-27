import axios from "axios";

export const getPokemonList = () => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_API_LOADING",
    });
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    // console.log('res', res.data.results);
    dispatch({
      type: "POKEMON_LIST_SUCCESSFUL",
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

export const getpokemon = (pokemon) =>async (dispatch)=>
{
  console.log('test', pokemon);
  try{
    dispatch({
      type:"ACTIVE_POKEMON_LOADING",
    })
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log('test res', res);
    dispatch({
      type:"ACTIVE_POKEMON_SUCCESS",
      payload:res.data,
      pokemonName:pokemon,
      
    })
  }
  catch(e)
  {
    dispatch({
      type:"ACTIVE_POKEMON_FAIL",
    });

  }
};



