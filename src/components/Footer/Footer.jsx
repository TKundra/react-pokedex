import React from 'react';
import Button from '@mui/material/Button';
import { Container } from './styles';

const Footer = ({setPage}) => {
    const handleOffset = (type) => {
        if (type === "previous") {
            setPage((prev) => prev===0 ? 0 : prev-=20);
        }
        if (type === "next") {
            setPage((prev) => prev+=20);
        }
    }
    return (
        <Container>
            <Button variant="outlined" size="medium" onClick={() => handleOffset("previous")}>
            Previous
            </Button>
            <Button variant="outlined" size="medium" onClick={() => handleOffset("next")}>
            Next
            </Button>
        </Container>
    );
};

export default Footer;