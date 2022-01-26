import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_Name] = useState("");

  console.log("this is my name and set name", name, set_Name);
  const insertName = () => {
    props.addPlayer(name);
    //set_Name("") its making the name erase after press the button add player
    set_Name("");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        NEW PLAYER:
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => {
            set_Name(event.target.value);
            // console.log("new Input .value", event.target.value);
          }}
        ></input>
        <button onClick={insertName}>ADD PLAYER</button>
      </p>
    </div>
  );
}
