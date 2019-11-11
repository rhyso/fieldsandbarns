/*
 src/App.js
*/

import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Basic } from './basic'

import FunctionalLandOwners from "./components/land-owners/functional/functional_land-owners";

export const App  = () =>  {
    return (
        <div className="App">
            <Basic />
            <FunctionalLandOwners/>
        </div>
    );
  }

export default App
