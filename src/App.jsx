import { useState } from "react";
import ContainerCenter from './components/ContainerCenter'
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ContainerCenter>
      <ToastContainer autoClose={2000} theme="dark" className="toast__container" />
      <GlobalStyle />
      <Routes />
    </ContainerCenter>
  );
}

export default App;
