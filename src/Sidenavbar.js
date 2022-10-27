import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getpokemon, getPokemonList } from "./actions";
// import ReactPaginate from "react-paginate";

function Sidenavbar(props) {
  const [search, setSearch] = useState("");
  const PokemonList = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonList());
  }, []);
  console.log("state", PokemonList);
  const showData = () => {
    if (PokemonList.isLoading) {
      <p>Loading...</p>;
    }
    if (PokemonList.error !== "") {
      return <p>{PokemonList.error}</p>;
    }
    if (PokemonList.data?.length) {
      console.log('list', PokemonList);
      let list = [];
      if (search) {
        list = PokemonList.data.filter((item, index) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        list = PokemonList.data;
      }
      return (
        <>
        <div>
          {list.map((pokemon, id) => {
            return (
              <div>
                <button
                  className="item-component"
                  key="id"
                  // onClick={(pokemon) => {
                  //   getpokemon(pokemon.name);
                  // }}
                  onClick={() => {
                    dispatch(getpokemon(pokemon.name));
                  }}
                  // style={{backgroundColor:}}
                >
                  {pokemon.name}
                </button>
                {/* <Link to={`/pokemon/${pokemon.name}`}>view</Link> */}
              </div>
            );
          })}
        </div>
        </>
      );
    }
  };

  return (
    <div className="left-container">
      <>
        <div className="searchInputs">
          <input
            className="input-cont"
            type="text"
            placeholder="enter the poke"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="searchIcon">{/* <SearchIcon /> */}</div>
        </div>
        <img className="img-container" src="./pokeman.jpg" />
        {showData()}
      </>
    </div>
  );
}

export default Sidenavbar;
