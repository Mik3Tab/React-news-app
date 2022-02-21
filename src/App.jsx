import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import News from "./components/News/News";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/news" element={<News/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
    </GlobalProvider>
  );
}

export default App;