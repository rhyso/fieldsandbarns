import React, { Suspense } from "react";
import './App.css';
import FunctionalLandOwners from "./components/land-owners/functional/functional_land-owners";
import { BarLoader } from "react-css-loaders";
const LazyBasic = React.lazy(() => import("./basic"));


export const App  = () =>  {
    return (
        <div className="App">
            <Suspense fallback={<BarLoader />}>
                <LazyBasic />
            </Suspense>
            <FunctionalLandOwners/>
        </div>
    );
  }

export default App
