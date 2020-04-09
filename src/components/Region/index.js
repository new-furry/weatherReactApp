import React, {Fragment} from "react";
import styled from 'styled-components';

//import components
import Box from '@material-ui/core/Box';
import RctPageLoader from '../Loading';

const Region = (props) => {
    const { filterRegionList, loading } = props;

    const getForecastData = (id) => {
        props.getForecast(id);
    };

    const BoxLiner = styled.div`
      display: flex;
      justify-content: space-round;
    `;
    const BoxLinerContent = styled.span`
      padding: 10px;
    `;

    return (
        <Fragment>
            {
                loading ? (
                    <RctPageLoader/>
                ) : (
                    filterRegionList.map((region, key) => (
                        <Box key={key} bgcolor="white" color="black" p={2}>
                            <BoxLiner>
                                <BoxLinerContent>{region.globalIdLocal}</BoxLinerContent>
                                <BoxLinerContent>{region.idAreaAviso}</BoxLinerContent>
                                <BoxLinerContent onClick={() => getForecastData(region.globalIdLocal)} style={{cursor: 'pointer'}}>Show</BoxLinerContent>
                            </BoxLiner>
                        </Box>
                    ))
                )
            }
        </Fragment>
    );
};

export default Region;
