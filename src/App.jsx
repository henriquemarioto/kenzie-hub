import { useState } from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" className="toast__container" />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
