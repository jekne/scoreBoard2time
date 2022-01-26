import AddPlayerForm from "./AddPlayerForm";

export default function AddPlayer(props) {
  return (
    <div className="AddPlayerForm">
      New player here:
      {props.name}
    </div>
  );
}
