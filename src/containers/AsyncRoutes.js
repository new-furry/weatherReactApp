import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "../components/Loading";

// barges management

export const main_page = Loadable({
    loader: () => import("./HomeContainer"),
    loading: () => <RctPageLoader />
});
