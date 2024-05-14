import React, { useState } from 'react';
import axios from 'axios';

function ChampionMastery() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  //const [summonerId, setSummonerId] = useState('');
  const [puuId, setPuuId] = useState("");
  const API_KEY = "RGAPI-593c191e-3c80-41a0-acfe-18ac2f8ebf26";

  const handleInputChange = (event) => {
    setPuuId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/" + puuId +"?api_key=" + API_KEY);
        
      setData(response.data);
    } catch (error) {
      if (error.response) {
        // Si une réponse d'erreur existe, afficher les données d'erreur
        setError(error.response.data);
    } else {
      // Sinon, afficher un message d'erreur générique
      setError('Erreur lors de la requête à l\'API Riot Games.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Entrer l'identifiant unique du joueur (PUUID) :
          <input type="text" onChange={handleInputChange} />
        </label>
        <button type="submit">Récupérer les données de maîtrise des champions</button>
      </form>
      {error && <div>Erreur : {error}</div>}
      {data && (
        <div>
          <h2>Données de maîtrise des champions :</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ChampionMastery;
