import './App.css';
// import Home from "./components/home/home.js";
// import Login from './components/login/login';
// import Initiate from './components/initiate/initiate';
import AppRouter from './router/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
