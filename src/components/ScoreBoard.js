import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Player from "./Player";

function compareScores(player_A, player_B) {
  return player_B.score - player_A.score;
}

function compareByName(player_A, player_B) {
  return player_A.name.localeCompare(player_B.name);
}

export default function ScoreBoard() {
  const [players, set_players] = useState([
    { id: 1, name: "Bioleta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Aisa", score: 42 },
  ]);
  console.log("what it is my players", players);

  const [sort_by, set_sort_by] = useState("score");

  const change_sorting = (event) => {
    console.log("new sort order", event.target.value);
    set_sort_by(event.target.value);
  };

  const playersSortedByScore = [...players].sort(compareScores);

  const playersSortedByName = [...players].sort(compareByName);
  return (
    <div className="Scoreboard">
      <select onChange={change_sorting} value={sort_by}>
        <option>Select by Score</option>
        <option>Select by Name</option>
      </select>
      <p>Player's scores:</p>
      <ul>
        {playersSortedByName.map((x) => {
          return <Player key={x.id} name={x.name} score={x.score} />;
        })}
        <AddPlayer />
      </ul>
    </div>
  );
}
