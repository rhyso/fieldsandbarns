import React, {Component, Fragment} from "react";


class HitServer extends Component {
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res =>  {
                console.log(res.data)
            });
    };


    render() {
        const foo = this.getDataFromDb()
        return (
           <Fragment>
               <h1>test{foo}</h1>
               <h2>{this.getDataFromDb()}</h2>
           </Fragment>
        );
    }
}
export default HitServer
