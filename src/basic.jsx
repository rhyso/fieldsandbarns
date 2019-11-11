import React, { Fragment } from "react";
import { useFetch } from "./hooks";
import Button from '@material-ui/core/Button';
import Blocks from "./components/blocks/Blocks";


export const Basic = ()  => {
    const [data, loading] = useFetch(
        "http://localhost:3001/api/getData"
    );

    return (
        <Fragment>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Blocks />
            <h1>Photos</h1>
            { loading ? ("Loading...") :
                (
                <ul>
                    {data === undefined ? "NO DB ENTRIES YET" : data.fields.map(landowners => (
                                            <li style={{padding: "10px"}} key={Math.random()}>
                                                <span>Field Name: {landowners.name} </span>
                                                <span>Field Alis: {landowners.alias} </span>
                                                <span>Field email: {landowners.email} </span>

                                            </li>
                                        ))}
                                    </ul>
            )}
        </Fragment>
    );
}
export default Basic;
