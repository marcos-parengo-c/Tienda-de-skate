import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetail from './containers/ItemDetail'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <BnavBar linkTo={"https://www.thrashermagazine.com/"} />
        <Switch>
          <Route exact path="/">
          <ItemListContainer greeting="Lugar del carrito?" />
          </Route>
          <Route exact path="/itemDetail">
            <ItemDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
