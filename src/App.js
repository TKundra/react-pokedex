import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { fetchPokemons } from './redux/api/pokemon';
import { useDispatch } from 'react-redux';
import { fetchPokemonStats } from './redux/api/pokemonStat';
import { StatContext, TypeContext } from './context/context';
import axios from 'axios';

function App() {

  const [type, setType] = useState(0);
  const [page, setPage] = useState(0);
  const [statsUrl, setStatsUrl] = useState("");
  const [pokemonType, setPokemonType] = useState([]);

  const dispatchPokemon = useDispatch();

  useEffect(async() => {
    try {
      await axios.get(
          `https://pokeapi.co/api/v2/type`,
      ).then((response) => {
        setPokemonType(response.data.results);
      }).catch((error) => console.log('error'));
    } catch (error) {
        console.log(error);
    }
  }, [])

  useEffect(() => {
    dispatchPokemon(fetchPokemons(page));
  }, [dispatchPokemon, page]);

  const statDispatcher = useDispatch();
  useEffect(() => {
      statDispatcher(fetchPokemonStats(statsUrl));
  }, [statsUrl, statDispatcher])
  
  return (
    <TypeContext.Provider value={pokemonType}>
      <StatContext.Provider value={setStatsUrl}>
        <div>
          <Navbar page={page} type={type} setType={setType}/>
          <Cards />
          {type===0 ? <Footer setPage={setPage} /> : null}
        </div>
      </StatContext.Provider>
    </TypeContext.Provider>
  );
}

export default App;
