import * as Types from "../reducer/Types";
import { NotificationManager } from "react-notifications";

const INIT_STATE = {
    mainState: {
        regionList: [],
        filterRegionList: [],
        forecastList: [],
        loading: true
    }
};

let regionList = [];
let forecastList = [];

const MainReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case Types.GET_REGION:
            return {
                ...state,
                mainState: {
                    ...state.mainState,
                },
            };
        case Types.GET_REGION_SUCCESS:
            let dataList = action.payload.data.data;
            dataList.map((region) => {
                regionList.push(region);
            });
            return {
                ...state,
                mainState: {
                    ...state.mainState,
                    regionList: regionList,
                    filterRegionList: regionList,
                    loading: false
                },
            };
        case Types.GET_REGION_FAILURE:
            NotificationManager.warning('failed to get regions');
            return {
                ...state,
                mainState: {
                    loading: false
                }
            };
        case Types.GET_FORECAST:
            return {
                ...state
            };
        case Types.GET_FORECAST_SUCCESS:
            let forecastData = action.payload.data;
            forecastList = [];
            forecastData.map((forecast) => {
                forecastList.push(forecast);
            });
            return {
                ...state,
                mainState: {
                    ...state.mainState,
                    forecastList: forecastList,
                    loading: false
                }
            };
        case Types.GET_FORECAST_FAILURE:
            NotificationManager.warning('failed to get forecast data!');
            return {
                ...state,
            };
        case Types.FILTER_REGION:
            let filterKey = action.payload;
            let searchResult = [];
            state.mainState.regionList.map((region) => {
                if (region.idAreaAviso.toLowerCase().indexOf(filterKey) > -1 || (region.globalIdLocal+"").indexOf(filterKey) > -1) {
                    searchResult.push(region);
                }
            });
            return {
                ...state,
                mainState: {
                    ...state.mainState,
                    filterRegionList: searchResult,
                }
            };

        default:
            return {
                ...state
            }
    }
};

export default MainReducer;
