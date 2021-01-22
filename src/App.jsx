import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/navbar';//NavBar marki
import BnavBar from './components/bootsnavbar/bootnavbar'

const App = () => {
  return (
    <div className="App">
      <BnavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.thrashermagazine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Una pagina de skate real
        </a>
      </header>
    </div>
  );
}

export default App;
