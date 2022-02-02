import React from 'react';
import { Container } from './styles';
import CardComponent from '../Card/CardComponent';
import { useSelector } from 'react-redux';

const Cards = () => {
  const { loading, error, pokemons } = useSelector((state) => state.pokemon)
  const { loading: loadingDetails, error: errorDetails, pokemonDetails } = useSelector((state) => state.pokemonDetail)

  return (
    <Container>
      {
        loading || loadingDetails ? <span>loading...</span> : 
        errorDetails === false && pokemonDetails != null ? pokemonDetails.map((data, index) => (
          <CardComponent key={index} pokemon={data.pokemon!=null ? data.pokemon : data} />
        )) : 
        error === false && pokemons != null ? pokemons.map((data, index) => (
          <CardComponent key={index} pokemon={data.pokemon!=null ? data.pokemon : data} />
        )) : errorDetails === true && error === true ? <span>no data found</span> : null
      }
    </Container>
  );
};

export default Cards;