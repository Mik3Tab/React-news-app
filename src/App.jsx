import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <routes>
        //rutas de los componentes
        
      </routes>
      <footer className="App-header">
        <p>
          App made with <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> <img src={logo} className="App-logo" alt="logo" />
        </p>
      </footer>
      </Router>
    </div>
  );
}
export default App;