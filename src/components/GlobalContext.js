import React, { useReducer } from "react";

export const GlobalContext = React.createContext();

const initialState = {
  lists: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, lists: [...state.lists, action.payload] };
    case "delete":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload)
      };
    case "edit":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.id ? { ...list, text: action.payload } : list
        )
      };
    default:
      return;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function addTodo(todo) {
    dispatch({
      type: "add",
      payload: todo
    });
  }
  function deleteTodo(id) {
    dispatch({
      type: "delete",
      payload: id
    });
  }
  function editTodo(index, text) {
    dispatch({
      type: "edit",
      id: index,
      payload: text
    });
  }
  return (
    <GlobalContext.Provider
      value={{ lists: state.lists, addTodo, deleteTodo, editTodo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
