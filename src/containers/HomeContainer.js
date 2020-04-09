import React, {Fragment, useEffect} from "react";
import { connect } from "react-redux";

//import components
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import {red} from "@material-ui/core/colors";
import RctPageLoader from '../components/Loading';
import Forecast from "../components/Forecast";
import Region from "../components/Region";

//import actions
import { getRegion, getForecast, filterRegionData } from "../actions/mainAction";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '50ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const HomeContainer = (props) => {
    const { filterRegionList, forecastList, loading } = props.mainState.mainState;

    const classes = useStyles();

    useEffect(() => {
        props.getRegion();
        props.getForecast(1010500);
    }, []);

    const getForecastData = (id) => {
        props.getForecast(id);
    };

    const filterRegion = (event) => {
        props.filterRegionData(event.target.value);
    };

      return (
          <Fragment>
              {
                  loading ? (
                      <div>
                          <RctPageLoader/>
                      </div>
                  ) : (
                      <div>
                          <Grid container className="mt-20">
                              <Grid item xs={12} sm={5}>
                                  <h3>REGION</h3>
                              </Grid>
                              <Grid item xs={12} sm={1}/>
                              <Grid item xs={12} sm={5}>
                                  <h3>FORECAST</h3>
                              </Grid>
                          </Grid>
                          <Grid container spacing={4} className="mt-5">
                              <FormControl className={classes.margin}>
                                  <InputLabel htmlFor="input-with-icon-adornment">Search key</InputLabel>
                                  <Input
                                      onChange={(event) => filterRegion(event)}
                                      id="input-with-icon-adornment"
                                      startAdornment={
                                          <InputAdornment position="start">
                                              <SearchIcon />
                                          </InputAdornment>
                                      }
                                  />
                              </FormControl>
                              <Grid container className="mt-20">
                                  <Grid item xs={12} sm={5}>
                                      {
                                          loading ? (
                                              <div>There is no data</div>
                                          ) : (
                                              <Region filterRegionList={filterRegionList} loading={loading} getForecast={(id) => getForecastData(id)}/>
                                          )
                                      }
                                  </Grid>
                                  <Grid item xs={12} sm={1}/>
                                  <Grid item xs={12} sm={5}>
                                      <Forecast forecastList={forecastList} loading={loading} />
                                  </Grid>
                              </Grid>
                          </Grid>
                      </div>
                  )
              }
          </Fragment>
      );
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(
    mapStateToProps,
    {
        getRegion,
        getForecast,
        filterRegionData
    }
)(HomeContainer);
