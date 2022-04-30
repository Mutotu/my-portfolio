import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
/////////////
//////
/////Add Link where there is anchor tag
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
