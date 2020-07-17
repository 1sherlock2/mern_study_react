import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/App.scss'
import MainApp from './App'

ReactDOM.render(<MainApp />, document.getElementById('root'));

serviceWorker.register();