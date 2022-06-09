import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const idGen = () => {
  return Math.floor(Math.random() * 10000) + 1;
};
const Input = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: idGen(),
      text: text
    };
    addTodo(obj);
    setText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea
          id="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" id="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
