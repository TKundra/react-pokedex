import React from 'react';
import Button from '@mui/material/Button';
import { Container } from './styles';

const Footer = () => {
    return (
        <Container>
            <Button variant="outlined" size="medium">
            Previous
            </Button>
            <Button variant="outlined" size="medium">
            Next
            </Button>
        </Container>
    );
};

export default Footer;