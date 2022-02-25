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
import Li from "../../components/Li";
import NewTechModal from "../../components/NewTechModal";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { kenzieHubApi } from "../../services/api";

const Home = ({ deslogar, setAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({ techs: [] });
  const [hidden, setHidden] = useState("hidden");
  const [update, setUpdate] = useState(0);
  const arrTech = [
    "angularjs",
    "c",
    "css3",
    "dart",
    "django",
    "flask",
    "flutter",
    "go",
    "html5",
    "java",
    "javascript",
    "kotlin",
    "laravel",
    "node",
    "php",
    "python",
    "reactjs",
    "react-native",
    "ruby",
    "swift",
    "typescript",
    "vuejs",
  ];

  useEffect(() => {
    getUser(localStorage.getItem("@KenzieHub:userId"));
  }, []);

  useEffect(() => {
    getUser(localStorage.getItem("@KenzieHub:userId"));
  }, [update]);

  async function getUser(userId) {
    await kenzieHubApi
      .get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((res) => {
        toast.error("Usuário inválido");
        localStorage.clear();
        setAuth(false);
        history.push("/login");
      });
  }

  const deleteTech = (id) => {
    kenzieHubApi
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("@KenzieHub:token")}`,
        },
      })
      .then((res) => {
        setUpdate(update + 1);
        toast.success("Tecnologia deletada");
      });
  };

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

      {/* <Barra /> */}
      <ContainerInfo>
        <SubTitle>Olá, {user?.name}</SubTitle>
        <ThirtTitle>{user?.course_module} (alguma coisa)</ThirtTitle>
      </ContainerInfo>
      {/* <Barra /> */}

      <ContainerTecnologias>
        <div>
          <p>Tecnologias</p>
          <Button color="dark" onClick={() => setHidden("")}>
            <span>+</span>
          </Button>
        </div>
        <Ul>
          {user.techs.length !== 0 ? (
            user.techs.map((item, index) => (
              <Li key={index}>
                <img
                  src={`https://xesque.rocketseat.dev/platform/tech/${item.title.toLowerCase()}.svg`}
                />

                <SubTitle>{item.title}</SubTitle>
                <ThirtTitle>{item.status}</ThirtTitle>
                <Button color="dark" onClick={() => deleteTech(item.id)}>
                  <FaTrash />
                </Button>
              </Li>
            ))
          ) : (
            <p>Você ainda não possui tecnologias</p>
          )}
        </Ul>
      </ContainerTecnologias>
      <NewTechModal
        className={hidden}
        setHidden={setHidden}
        setUpdate={setUpdate}
        update={update}
        arrTech={arrTech}
      />
    </Container>
  );
};

export default Home;
