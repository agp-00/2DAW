import './App.css';
import Movie from './tarjeta.js';
import { seriesList } from './series-static.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {seriesList.map 
        
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
        </a>
      </header>
    </div>
  );
}

export default App;
