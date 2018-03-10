import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counterApp);


const root = document.getElementById('root')

ReactDOM.render(
        <Provider store = {store}>
             <App />
        </Provider>, root);
registerServiceWorker();
