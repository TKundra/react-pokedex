import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const CardComponent = () => {
    return (
        <Box m={2}>
            <Card sx={{ maxWidth: 450, display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Stack direction="column" spacing={1}>
                            <Chip label="Chip Filled" />
                            <Chip label="Chip Filled" />
                            <Chip label="Chip Filled" />
                            <Chip label="Chip Filled" />
                        </Stack>
                    </CardContent> 
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 260 }}
                    image="/logo512.png"
                    alt="Live from space album cover"
                />
            </Card>
        </Box>
    );
};

export default CardComponent;


/*



    */