import {
  Container,
  ContainerTitle,
  ContainerInfo,
  ContainerTecnologias,
} from "./style";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import ThirtTitle from "../../components/ThirtTitle";
import Button from "../../components/Button";
import Barra from "../../components/Barra";
import Ul from "../../components/Ul";
import NewTechModal from "../../components/NewTechModal";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { kenzieHubApi } from "../../services/api";

const Home = ({ deslogar, setAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    getUser(localStorage.getItem("@KenzieHub:userId"));
  }, []);

  async function getUser(userId) {
    await kenzieHubApi
      .get(`/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((res) => {
        console.log(res);
        toast.error("Usuário inválido");
        localStorage.clear();
        setAuth(false);
        history.push("/login");
      });
  }

  return (
    <Container>
      <ContainerTitle>
        <Title />
        <Button
          color="dark"
          onClick={() => {
            deslogar();
          }}
        >
          Sair
        </Button>
      </ContainerTitle>

      <Barra />
      <ContainerInfo>
        <SubTitle>Olá, {user?.name}</SubTitle>
        <ThirtTitle>{user?.course_module} (alguma coisa)</ThirtTitle>
      </ContainerInfo>
      <Barra />

      <ContainerTecnologias>
        <div>
          <p>Tecnologias</p>
          <Button color="dark" onClick={() => setHidden("")}>
            <span>+</span>
          </Button>
        </div>
        <Ul>
          {user?.techs.map((item) => (
            <li>
              <p>{item.title}</p>
              <p>{item.status}</p>
            </li>
          ))}
        </Ul>
      </ContainerTecnologias>
      <NewTechModal className={hidden} setHidden={setHidden} />
    </Container>
  );
};

export default Home;
