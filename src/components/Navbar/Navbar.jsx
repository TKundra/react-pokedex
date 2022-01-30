import React, { useEffect, useState } from 'react';
import { Container, SearchBar, OptionBox, SearchBox, Button } from './styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchPokemonType } from '../../redux/api/pokemon';
import { fetchPokemonDetailName } from '../../redux/api/pokemonDetail';
import { FormHelperText } from '@mui/material';

const Navbar = ({type, setType}) => {

  let pokemonName = "";

  const [name, setName] = useState("");
  const dispatchPokemonType = useDispatch();
  const dispatchPokemonName = useDispatch();

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
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
            <FormHelperText>Type</FormHelperText>
        </FormControl>
      </OptionBox>
      
    </Container>
  );
};

export default Navbar;
