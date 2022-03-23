import logo from './logo.svg';
import './App.css';
import data from './data/single-sample.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="playlist">
          <img src={data.album.images[1].url} />
          <h4>{data.album.name}</h4>
          <p>{data.album.artists[0].name}</p>
          <button type="submit">Select</button>
        </div>
      </header>
    </div>
  );
}

export default App;
