import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {BrouserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <footer className="App-header">
        <p>
          App made with <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> <img src={logo} className="App-logo" alt="logo" />
        </p>
      </footer>
    </div>
  );
}
export default App;