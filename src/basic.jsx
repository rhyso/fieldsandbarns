import React, { Fragment } from "react";
import { useFetch } from "./hooks";
import Button from '@material-ui/core/Button';
import { BarLoader } from 'react-css-loaders';
import Blocks from "./components/blocks/Blocks";
import Input from './components/blocks/Input'
import { GET_LAND_OWNERS_DATA_PATH } from './api/constants'

export const Basic = ()  => {
    const [data, loading] = useFetch( GET_LAND_OWNERS_DATA_PATH );

    const dashboardFields = () => {
       return loading ? <BarLoader/> :
            <ul>
                {data && data.fields.map(landowners => (
                    <li style={{padding: "10px"}} key={Math.random()}>
                        <span>Field Name: {landowners.name} </span>
                        <span>Field Alis: {landowners.alias} </span>
                        <span>Field email: {landowners.email} </span>
                    </li>
                ))
                }
            </ul>
    }

    return (
        <Fragment>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Blocks />
            <Input />
            <h1>Photos</h1>
            { dashboardFields() }
        </Fragment>
    );
}
export default Basic;
