import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import ChampionMastery from './ChampionMastery';

function App() {
  const [playerData, setPlayerData] = useState("");
  const AccountId = "vwO_17sqcbtaCl7gu1PNmC12hYwEQKIKLsZG5CmmObHOEbBpuyzk_rUF";
  const API_KEY = "RGAPI-593c191e-3c80-41a0-acfe-18ac2f8ebf26";
  
  function searchForPlayer(event) {
    // Set up the correct API call
    var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-account/" + AccountId + "?api_key=" + API_KEY;
    // Handle the API call
    axios.get(APICallString).then(function (response){
      // Sucess
      console.log(response.data);
      setPlayerData(response.data);
    }).catch(function (error) {
      // Error
      console.log(error);
    });
  }

  console.log(playerData);

  return (
    <div className="App">
      <h1>Application utilisant l'API de Riot Games</h1>
      <ChampionMastery />
      <div className="container">
        <h3>League of Legends Player Seacher</h3>
        <input type="text" onChange={e => setPlayerData(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search player</button>
      </div>
      {JSON.stringify(playerData)  != '{}' ? 
      <>
        <p>{playerData.name}</p> 
        <img width="100" height="100" title="profile icon" src={"https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        <p>Summoner level : {playerData.summonerLevel}</p>
      </> 
      : 
      <>
        <p>No player data</p> 
      </>
    }
    </div>
  );
}

export default App;
