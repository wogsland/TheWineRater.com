import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Wine from './Wine';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/wine" component={Wine}/>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
