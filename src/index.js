import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Appellation from './Appellation';
import Footer from './Footer';
import Grape from './Grape';
import Header from './Header';
import HomePage from './HomePage';
import Wine from './Wine';
import Winery from './Winery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
      <Route path="/" component={App}/>
      <Route path="/appellation" component={Appellation}/>
      <Route path="/grape" component={Grape}/>
      <Route path="/wine" component={Wine}/>
      <Route path="/winery" component={Winery}/>
      <Footer />
    </div>
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
