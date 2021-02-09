import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetail from './containers/ItemDetail'

const App = () => {
  return (
    <div className="App">
      <BnavBar link={"https://www.thrashermagazine.com/"}/>
      <ItemListContainer greeting="Lugar del carrito?"/>
      <ItemDetail />
    </div>
  );
}
export default App;
