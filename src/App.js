import './App.css';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
      
      </header>
    </div>
  );
}

export default App;
