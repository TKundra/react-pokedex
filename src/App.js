import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { fetchPokemons } from './redux/api/pokemon';
import { useDispatch } from 'react-redux';
import { fetchPokemonStats } from './redux/api/pokemonStat';
import { StatContext } from './context/context';

function App() {

  const [type, setType] = useState(0);
  const [page, setPage] = useState(0);
  const [statsUrl, setStatsUrl] = useState("");

  const dispatchPokemon = useDispatch();

  useEffect(() => {
    dispatchPokemon(fetchPokemons(page));
  }, [dispatchPokemon, page]);

  const statDispatcher = useDispatch();
  useEffect(() => {
      statDispatcher(fetchPokemonStats(statsUrl));
  }, [statsUrl, statDispatcher])
  
  return (
    <StatContext.Provider value={setStatsUrl}>
      <div>
        <Navbar page={page} type={type} setType={setType}/>
        <Cards />
        {type===0 ? <Footer setPage={setPage} /> : null}
      </div>
    </StatContext.Provider>
  );
}

export default App;
