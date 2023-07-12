import { useState } from "react";

const NewTodoForm = (props) => {

    const [newItem, setNewItem] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        if(newItem === "") return

        props.onSubmit(newItem);
    
        setNewItem("");
      }

  return (
     <form onSubmit={submitHandler} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            value={newItem}
            type="text"
            id="item"
            onChange={(event) => setNewItem(event.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}

export default NewTodoForm