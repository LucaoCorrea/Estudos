import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";


import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Container customClass="min-heigth">
          <Routes>
            <Route path="/" exact="true" element={<Home />}></Route>
            <Route path="/company" exact="true" element={<Company />}></Route>
            <Route path="/contact" exact="true" element={<Contact />}></Route>
            <Route
              path="/newproject"
              exact="true"
              element={<NewProject />}
            ></Route>
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
