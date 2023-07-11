import { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("its working!");
  const [newItem, setNewItem] = useState("");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            value={newItem}
            type="text"
            id="item"
            onChange={event => setNewItem(event.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header"> Todo List </h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Input 1
          </label>
          <button className="btn btn-danger"> Delete </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Input 1
          </label>
          <button className="btn btn-danger"> Delete </button>
        </li>
      </ul>
    </>
  );
}
