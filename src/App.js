/**
 * Main App
 */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//date moment - material ui
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

/**
 * CSS imports
 */

// app component
import App from "./containers/MainContainer";

import { store } from "./reducer";

const MainApp = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </Router>
        </MuiPickersUtilsProvider>
    </Provider>
);

export default MainApp;

