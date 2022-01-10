import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions/Actions.js';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
  LinearProgress,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '92%',
    padding: '1% 4%',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    padding: '1rem',
  },
  text: {
    // backgroundColor: 'rgb(179, 208, 214)',
    backgroundColor: 'rgb(235, 237, 245)',
  },
}));

const Main = (props) => {
  // const [countries, setCountries] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    props.getCountries();
  }, []);
  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        List of countries fetched from API
      </Typography>
      <Grid container spacing={2}>
        {props.isLoading ? (
          <Box sx={{ width: '100%', mt: '2rem' }}>
            <LinearProgress color="inherit" />
          </Box>
        ) : (
          props.countries.map((country) => {
            return (
              <Grid item key={country.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      width="400"
                      image={country.flag}
                      alt="country name"
                    />
                    <CardContent className={classes.text}>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Capital: {country.capital}, Population: {country.population}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getCountries })(Main);
