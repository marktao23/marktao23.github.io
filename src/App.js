import './App.css';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar.js';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Resume/>
    </div> 
  );
}

export default App;
