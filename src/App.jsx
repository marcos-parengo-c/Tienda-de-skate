import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import Greeting from './components/greeting'

const App = () => {
  return (
    <div className="App">
      <BnavBar link={"https://www.thrashermagazine.com/"}/>
      <ItemListContainer><Greeting/></ItemListContainer>    
    </div>
  );
}
export default App;
