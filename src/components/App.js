import React from "react";
import "./../styles/App.css";
import { GlobalProvider } from "./GlobalContext";
import Input from "./Input";
import Display from "./Display";
function App() {
  return (
    <div id="main">
      <GlobalProvider>
        <Input />
        <Display />
      </GlobalProvider>
    </div>
  );
}

export default App;
