import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Item from "./Item";

const Display = () => {
  const { lists } = useContext(GlobalContext);
  return (
    <ul>
      {lists.map((list) => (
        <Item key={list.id} list={list} className="list" />
      ))}
    </ul>
  );
};

export default Display;
