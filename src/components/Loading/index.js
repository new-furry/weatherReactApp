/**
 * Rct Page Loader
 */
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const RctPageLoader = () => (
    <div style={{color: 'red'}} className="page-loader d-flex justify-content-center mb-30">
        <CircularProgress style={{color: 'red', marginTop: '50px'}} />
    </div>
);

export default RctPageLoader;
