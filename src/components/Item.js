import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const Item = ({ list }) => {
  const [expand, setExpand] = useState(false);
  const [input, setInput] = useState("");
  const { deleteTodo, editTodo } = useContext(GlobalContext);
  const changeHandler = (e) => {
    const saveBtn = document.querySelector(".saveTask");
    if (e.target.value !== "") {
      setInput(e.target.value);
    }
  };
  const clickHandler = () => {
    editTodo(list.id, input);
    setExpand(!expand);
        setInput("");
  };
  return (
    <>
      <li>{list.text}</li>
      <button className="delete" onClick={() => deleteTodo(list.id)}>
        Delete
      </button>
      <button className="edit" onClick={() => setExpand(!expand)}>
        Edit
      </button>
      {expand && (
        <div>
          <textarea
            className="editTask"
            value={input}
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="saveTask"
            onClick={clickHandler}
            disabled={input.length > 0 ? false : true}
          >
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default Item;
