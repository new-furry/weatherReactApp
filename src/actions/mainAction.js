/**
 * Redux App Settings Actions
 */
import * as types from "../reducer/Types";

/**
 * Get Region
 */
export const getRegion = () => ({
    type: types.GET_REGION,
});
export const getRegionSuccess = (data) => ({
   type: types.GET_REGION_SUCCESS,
   payload: { data }
});
export const getRegionFailure = (error) => ({
    type: types.GET_REGION_FAILURE,
    payload: { error }
});

/**
 * Get Forecast
 */
export const getForecast = (data) => ({
    type: types.GET_FORECAST,
    payload: data
});
export const getForecastSuccess = (data) => ({
    type: types.GET_FORECAST_SUCCESS,
    payload: data
});
export const getForecastFailure = (error) => ({
    type: types.GET_FORECAST_FAILURE,
    payload: { error }
});

/**
 * Get Forecast
 */
export const filterRegionData = (data) => ({
    type: types.FILTER_REGION,
    payload: data
});
