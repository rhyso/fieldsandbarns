import React, { Fragment } from "react";
import { useFetch } from "./hooks";

export const Basic = ()  => {
    const [data, loading] = useFetch(
        "http://localhost:3001/api/getData"
    );

    return (
        <Fragment>
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
