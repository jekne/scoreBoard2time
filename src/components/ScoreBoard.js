import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compareScore(player_A, player_B) {
  return player_B.score - player_A.score;
}

function compareName(player_A, player_B) {
  return player_A.name.localeCompare(player_B.name);
}

export default function ScoreBoard() {
  const [players, set_players] = useState([
    { id: 1, name: "Bioleta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Aisa", score: 42 },
  ]);
  // console.log("what it is my players", players);

  const playersComparingScore = [...players].sort(compareScore);
  const playersComparingName = [...players].sort(compareName);

  // now we are doing a sorter

  const [sortBy, set_sort_By] = useState("score");

  const playersSorted = [...players].sort(
    sortBy === "name" ? compareName : compareScore
  );

  const changeSorting = (event) => {
    // console.log("new sor order", event.target.value);
    set_sort_By(event.target.value);
  };

  const [score, setScore] = useState();

  const incrementScore = (player_id) => {
    console.log("Increment player", player_id);
    const newArray = players.map((x) => {
      if (x.id === player_id) {
        return {
          ...x,
          score: x.score + 1,
        };
      } else {
        return x;
      }
    });
    set_players(newArray);
  };
  //
  const resetScorePerPlayer = (player_id) => {
    console.log("this is my player id from the reset", player_id);
    const newArrayReset = players.map((x) => {
      if (x.id === player_id) {
        return {
          ...x,
          score: 0,
        };
      } else {
        return x;
      }
    });
    set_players(newArrayReset);
  };
  //
  const resetAllPlayers = (player_id) => {
    console.log("this is my reset all players", player_id);
    const newArrayThisResetAll = players.map((x) => {
      return {
        ...x,
        score: 0,
      };
    });
    set_players(newArrayThisResetAll);
  };

  const randonScoreFunction = (player_id) => {
    console.log("this is the player to random the score", player_id);
    const newArrayWithRandonNumber = players.map((x) => {
      if (x.id === player_id) {
        return {
          ...x,
          score: Math.floor(Math.random() * 101),
        };
      } else {
        return x;
      }
    });
    set_players(newArrayWithRandonNumber);
  };

  const addPlayer = (name) => {
    set_players([
      ...players,
      {
        name,
        score: 0,
        id: Math.random(),
      },
    ]);
  };

  return (
    <div className="Scoreboard">
      <select onChange={changeSorting} value={sortBy}>
        <option value="score">Order by score</option>
        <option value="name">Order by Name</option>
      </select>
      <p>Player's scores:</p>
      <button onClick={resetAllPlayers}>RESET ALL PLAYERS AT ONCE</button>
      <ul>
        {playersSorted.map((x) => {
          return (
            <Player
              key={x.id}
              //don fotget to map the id to in order to call
              //in some cases go to players and check if the name it is the same on
              //props.randonScore(props.id); with here randonScore
              id={x.id}
              name={x.name}
              score={x.score}
              incrementScore={incrementScore}
              resetScore={resetScorePerPlayer}
              randonScore={randonScoreFunction}
            />
          );
        })}
        <AddPlayer />
        <AddPlayerForm
          // again it is a props coming from addplayerform
          //check the addPlayer and the props.addPlayer(name)
          // addPlayer={(name) => {
          //   console.log("lets add a new player with the name of", name);
          // }}
          addPlayer={addPlayer}
        />
      </ul>
    </div>
  );
}
