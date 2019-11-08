import React, { useReducer, useEffect } from "react";
import { reducer, initialState} from "./reducer";
import {logToScreen} from './action-creators'
const axios = require('axios');

const FunctionalLandOwners = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log('test func')
    }, [])

    const  { logMessage } = state
    return(
        <div>
            <button onClick={() => dispatch(logToScreen('jon'))}>dispatch</button>
            <h1>functional react {logMessage} </h1>
        </div>
    )
}
//
// export class LandOwners extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             fields: [],
//             intervalIsSet: false,
//         };
//     }
//
//     componentDidMount() {
//         this.props.simpleAction();
//         this.getDataFromDb();
//         if (!this.state.intervalIsSet && !this.state.fields) {
//             let interval = setInterval(this.getDataFromDb, 5000);
//             this.setState({ intervalIsSet: interval });
//         }
//     }
//
//     componentWillUnmount() {
//         if (this.state.intervalIsSet) {
//             clearInterval(this.state.intervalIsSet);
//             this.setState({ intervalIsSet: null });
//         }
//     }
//
//
//     getDataFromDb = () => {
//         axios.get("http://localhost:3001/api/getData")
//             .then( (response) => response.data ) //needs to be data for some reason
//             .then( res => { console.log(res); this.setState({ fields: res.fields })})//then can be object name
//             .catch(error => console.log(error));
//
//     };
//
//
//
//     render() {
//         const { fields } = this.state;
//         console.log(fields)
//
//         return (
//             <div>
//                 <ul>
//                     {fields && fields.length <= 0 ? "NO DB ENTRIES YET" : fields.map(dat => (
//                         <li style={{ padding: "10px" }} key={Math.random()}>
//                             <span>Field Name: {dat.name} </span>
//                             <span>Field Alis: {dat.alias} </span>
//                             <span>Field email: {dat.email} </span>
//
//                         </li>
//                     ))}
//                 </ul>
//                 <div>
//                     <h1>add new field</h1>
//                     <AddNewField/>
//                 </div>
//             </div>
//         );
//     }
// }
//

export default FunctionalLandOwners
