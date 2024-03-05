import './App.css';
import Navbar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Contact/>
    </div>
  );
}

export default App;
