import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewField from './components/addNewField'
import AddNewOwner from './components/addNewOwner'


ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <Switch>
            <Route path="/admin/add-new-field" component={AddNewField} exact/>
            <Route path="/admin/add-new-owner" component={AddNewOwner} exact/>
            <App  path="/" exact />
            <Route component={Error}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
