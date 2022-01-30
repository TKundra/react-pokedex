import React, { useEffect, useContext } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Container, Text, Wrapper, Bottom } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, Dialog,  DialogContent, DialogTitle } from '@mui/material';
import { useSelector } from 'react-redux';
import { StatContext } from '../../context/context';

const useStyles = makeStyles((theme) => ({
    media: {
        objectFit: 'cover',
    }
}))

const IMAGE_URL = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world";
const CardComponent = ({pokemon}) => {
    const classes = useStyles();
    const { loading, error, pokemonStats } = useSelector((state) => state.pokemonStat);
    const statContext = useContext(StatContext);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        statContext(pokemon['url'].split('/')[6]);
    }, [open, statContext])

    return (
        <>
            <Wrapper>
                <Container>
                    <div style={{marginLeft: '10px'}}>
                        <Text>{pokemon['url'].split('/')[6]}</Text>
                        <br />
                        <Text>{pokemon.name}</Text>
                    </div>
                    <div style={{height: '250px', width: '250px'}}>
                        <CardMedia
                            height="250px"
                            width="250px"
                            component="img"
                            className={classes.media}
                            image={`${IMAGE_URL}/${pokemon['url'].split('/')[6]}.svg`}
                            alt=""/>
                    </div>
                </Container>
                <Bottom>
                    <Text onClick={handleClickOpen}>click to open</Text>
                </Bottom>
            </Wrapper>

        <Dialog fullWidth
            style={{maxHeight: "100vh"}}
            maxWidth="60vw"
            open={open}
            onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {pokemon.name}
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Wrapper style={{boxShadow: 'none', width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
                    <Box height="100%" width="35%">
                        <CardMedia
                            className={classes.media}
                            component="img"
                            image={`${IMAGE_URL}/${pokemon['url'].split('/')[6]}.svg`}
                            alt=""/>
                    </Box>
                    <Box width="60%" >
                        {
                        loading ? <span>loading...</span> : pokemonStats?.map((data, index) => (
                            <div key={index} style={{display: 'flex'}}>
                                <span>{data.stat.name}</span>
                                <div style={{width: `${data.base_stat}%`, alignItems: 'right', marginLeft: '5px', marginBottom: '10px', height: '20px', backgroundColor: `#008${index}${index}a`}}>
                                    <span style={{color: 'white', padding: '10px'}}>{`${data.base_stat}%`}</span>
                                </div>
                            </div>
                        ))
                    }
                    </Box>
                </Wrapper>
            </DialogContent>
        </Dialog>
        </>
    );
};

export default CardComponent;