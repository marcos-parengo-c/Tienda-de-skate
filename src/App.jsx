import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetail from './containers/ItemDetail'
import Checkout from './containers/Checkout'
import { CartProvider } from './context/cartContext.jsx'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <BnavBar linkTo={"https://www.thrashermagazine.com/"} />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route exact path="/itemDetail/:id">
              <ItemDetail />
            </Route>
            <Route exact path="/Checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
