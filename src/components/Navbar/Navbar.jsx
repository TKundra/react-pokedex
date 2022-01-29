import React from 'react';
import { Container, SearchBar, OptionBox } from './styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const Navbar = () => {
  return (
    <Container>
        <SearchBar placeholder="search pokemon" />

        <OptionBox>
          <FormControl fullWidth>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value={age}
              label="Age"
              onChange={() => {}}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
      </OptionBox>
      
    </Container>
  );
};

export default Navbar;
