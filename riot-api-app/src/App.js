import logo from './logo.svg';
import './App.css';
//import ChampionMastery from './ChampionMastery';

function App() {
  return (
    <div className="App">
      {/*<h1>Application utilisant l'API de Riot Games</h1>
      <ChampionMastery />*/}
      <div className="container">
        <h5>League of Legends Player Seacher</h5>
        <input type="text"></input>
        <button>Search player</button>
      </div>
    </div>
  );
}

export default App;
