import React, {Fragment, Suspense} from "react";
import './App.css';
import FunctionalLandOwners from "./components/land-owners/functional/functional_land-owners";
import { BarLoader } from "react-css-loaders";
import Tabs from "./components/Tabs";

const LazyBasic = React.lazy(() => import("./basic"));


export const App  = () =>  {
    return (
        <div className="App">
            {/*<Tabs />*/}
            <Suspense fallback={<BarLoader />}>
                <LazyBasic />
            </Suspense>
            <FunctionalLandOwners/>
        </div>
    );
  }

export default App
