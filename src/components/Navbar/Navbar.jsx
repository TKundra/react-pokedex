import React, { useEffect, useState, useContext } from 'react';
import { Container, SearchBar, OptionBox, SearchBox, Button } from './styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchPokemonType } from '../../redux/api/pokemon';
import { fetchPokemonDetailName } from '../../redux/api/pokemonDetail';
import { FormHelperText } from '@mui/material';
import { TypeContext } from '../../context/context';

const Navbar = ({type, setType}) => {

  let pokemonName = "";

  const [name, setName] = useState("");
  const dispatchPokemonType = useDispatch();
  const dispatchPokemonName = useDispatch();

  const pokemonTypes = useContext(TypeContext);

  useEffect(() => {
    dispatchPokemonType(fetchPokemonType(type));
  }, [type, dispatchPokemonType]);

  useEffect(() => {
    dispatchPokemonName(fetchPokemonDetailName(name));
  }, [name, dispatchPokemonName]);

  function handleType(type){
    setType(type);
  }
  function handleName(value) {
    pokemonName = value;
  }

  return (
    <Container>
        <SearchBox>
          <SearchBar placeholder="search pokemon" onChange={(e) => handleName(e.target.value)} />
          <Button onClick={(e) => {
            e.preventDefault();
            setName(pokemonName);
          }}>search</Button>
        </SearchBox>
        
        <OptionBox>
          <FormControl variant="standard" fullWidth>
            <Select
              id="select"
              value={type}
              label="Type"
              onChange={(e) => handleType(e.target.value)}>
                {pokemonTypes.filter((type) => type.name!='unknown').map((type, index) => (
                  <MenuItem key={index} value={type.name}>{type.name}</MenuItem>
                ))}
            </Select>
            <FormHelperText>Type</FormHelperText>
        </FormControl>
      </OptionBox>
      
    </Container>
  );
};

export default Navbar;
