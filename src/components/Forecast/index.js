import React, {Fragment} from "react";
import styled from "styled-components";

//import components
import RctPageLoader from '../Loading';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

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

const Forecast = (props) => {
    const { forecastList, loading } = props;
    const classes = useStyles();

    const TyperWraper = styled.span`
        display: block
    `;

    return (
        <Fragment>
            {
                loading ? (
                    <RctPageLoader/>
                ) : (
                    <TyperWraper>
                        {
                            forecastList.map((forecast, key) => (
                                <List key={key} className={classes.root}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <WbSunnyIcon />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={forecast.forecastDate}
                                            secondary={
                                                <React.Fragment>
                                                    <TyperWraper>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            <span>Minimum temperature:</span>
                                                        </Typography>
                                                        <span>{forecast.tMin}</span>
                                                    </TyperWraper>
                                                    <TyperWraper>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            <span>Maximum temperature:</span>
                                                        </Typography>
                                                        <span>{forecast.tMax}</span>
                                                    </TyperWraper>
                                                    <TyperWraper>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            <span>% precipitation:</span>
                                                        </Typography>
                                                        <span>{forecast.precipitaProb}</span>
                                                    </TyperWraper>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            ))
                        }
                    </TyperWraper>
                )
            }
        </Fragment>
    );
};

export default Forecast;
