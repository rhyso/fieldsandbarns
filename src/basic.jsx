import React, { Fragment } from "react";
import { useFetch } from "./hooks";
import Button from '@material-ui/core/Button';
import { BarLoader } from 'react-css-loaders';
import Blocks from "./components/blocks/Blocks";
import AddNewOwner from './components/addNewOwner'
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
            <div className="topmenu" >
                <h1 className={'header-title'}>Land for Events</h1>

                <div id="topmenuinner" >
                    <ul id="uhs-cat">
                        <li id="unique-selfcatering"><a
                            href="https://www.uniquehomestays.com/self-catering/"><b>HOMESTAYS</b></a></li>
                        <li id="unique-gatherings"><a
                            href="https://www.uniquehomestays.com/unique-escapes/house-party/"><b>GATHERINGS</b></a>
                        </li>
                        <li id="unique-weddings"><a href="https://www.uniquehomestays.com/weddings/"><b>WEDDINGS</b></a>
                        </li>
                        <li id="unique-escapes"><a
                            href="https://www.uniquehomestays.com/unique-escapes/"><b>COLLECTIONS</b></a></li>
                        <li id="owners"><a href="https://www.uniquehomestays.com/membership.asp"><b>OWNERS</b></a></li>
                        <li id="unique-blog"><a href="https://www.uniquehomestays.com/live-unique/"><b>JOURNAL</b></a>
                        </li>
                        <li id="myuhs"><a href="https://secure.uniquehomestays.com/mybooking/"><b>MY BOOKING</b></a>
                        </li>
                        <li id="searchproperties"><a href="https://www.uniquehomestays.com/self-catering/"
                                                     ><b>search</b></a></li>
                        <li id="telephonelink"><a href="tel:+441637881183" className="contacttel bookingstelephone"
                                                 >+44 (0) 1637 881183</a>
                        </li>
                    </ul>
                </div>
            </div>


            {/*<Button variant="contained" color="primary">*/}
            {/*    Hello World*/}
            {/*</Button>*/}
            {/*<Blocks />*/}
            {/*<Input />*/}
            {/*<AddNewOwner />*/}
            {/*<h1>Photos</h1>*/}
            {/*{ dashboardFields() }*/}
        </Fragment>
    );
}
export default Basic;
