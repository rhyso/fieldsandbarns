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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
            <Basic />
            <FunctionalLandOwners/>
        </div>
    );
  }

export default App
