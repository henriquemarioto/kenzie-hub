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
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Select from "../../components/Select";
import TagError from "../../components/TagError";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { kenzieHubApi } from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Home = ({ deslogar, setAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({ techs: [] });
  const [hiddenTech, setHiddenTech] = useState(true);
  const [hiddenAlterTech, setHiddenAlterTech] = useState(true);
  const [techClicked, setTechClicked] = useState();
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

  const formSchemaTech = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register: registerTech,
    handleSubmit: handleSubmitTech,
    formState: { errors: errorsTech },
  } = useForm({
    resolver: yupResolver(formSchemaTech),
  });

  const onSubmitFunctionTech = (data) => {
    kenzieHubApi
      .post("/users/techs", data, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("@KenzieHub:token")}`,
        },
      })
      .then((res) => {
        toast.success("Cadastrado com sucesso");
        setUpdate(update + 1);
        setHiddenTech("hidden");
      })
      .catch((res) => {
        toast.error("Algo deu errado");
        console.log(res);
      });
  };

  const formSchemaAlterTech = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register: registerAlterTech,
    handleSubmit: handleSubmitAlterTech,
    formState: { errors: errorsAlterTech },
  } = useForm({
    resolver: yupResolver(formSchemaAlterTech),
  });

  const onSubmitFunctionAlterTech = (data) => {
    kenzieHubApi
      .put(`/users/techs/${localStorage.getItem("@KenzieHub:techClick")}`, data, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("@KenzieHub:token")}`,
        },
      })
      .then((res) => {
        toast.success("Alterado com sucesso");
        setUpdate(update + 1);
        setHiddenAlterTech(true);
        localStorage.removeItem("@KenzieHub:techClick");
      })
      .catch((res) => {
        toast.error("Algo deu errado");
        console.log(res);
      });
  };

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
      })
      .catch((res) => toast.error("Algo deu errado"));
  };

  useEffect(() => {
    getUser(localStorage.getItem("@KenzieHub:userId"));
  }, []);

  useEffect(() => {
    getUser(localStorage.getItem("@KenzieHub:userId"));
  }, [update]);

  return (
    <Container>
      {/**---------------Header--------------- */}
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

      {/*---------------*Nome e modulo--------------- */}
      <Barra />
      <ContainerInfo>
        <SubTitle>Olá, {user?.name}</SubTitle>
        <ThirtTitle>{user?.course_module} (alguma coisa)</ThirtTitle>
      </ContainerInfo>
      <Barra />

      {/**---------------Lista de tecnologias--------------- */}
      <ContainerTecnologias>
        <div>
          <p>Tecnologias</p>
          <Button color="dark" onClick={() => setHiddenTech(false)}>
            <span>+</span>
          </Button>
        </div>
        <Ul>
          {user.techs.length !== 0 ? (
            user.techs.map((item, index) => (
              <Li
                key={index}
                onClick={() => {
                  setHiddenAlterTech(false);
                  setTechClicked(item);
                  localStorage.setItem("@KenzieHub:techClick", item.id);
                }}
              >
                <img
                  src={`https://xesque.rocketseat.dev/platform/tech/${item.title.toLowerCase()}.svg`}
                />

                <SubTitle>{item.title}</SubTitle>
                <ThirtTitle>{item.status}</ThirtTitle>
              </Li>
            ))
          ) : (
            <p>Você ainda não possui tecnologias</p>
          )}
        </Ul>
      </ContainerTecnologias>

      {/**---------------Modal de cadastro de tech--------------- */}
      {!hiddenTech && (
        <Modal name="Cadastrar tecnologia" hidden={setHiddenTech}>
          <Form
            onSubmit={handleSubmitTech(onSubmitFunctionTech)}
            className="form__register__tech"
          >
            <Select name="Nome" register={registerTech} registerName="title">
              {arrTech.map((item, index) => (
                <option
                  value={item[0].toUpperCase() + item.slice(1)}
                  key={index}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </option>
              ))}
            </Select>
            <TagError>{errorsTech.title?.message}</TagError>
            <Select
              name="Selecionar status"
              register={registerTech}
              registerName="status"
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <TagError>{errorsTech.status?.message}</TagError>
            <Button type="submit">Cadastrar Tecnologia</Button>
          </Form>
        </Modal>
      )}

      {/**---------------Modal para alterar tech--------------- */}
      {!hiddenAlterTech && (
        <Modal name="Tecnologia Detalhes" hidden={setHiddenAlterTech}>
          <Form
            className="form__alter__tech"
            onSubmit={handleSubmitAlterTech(onSubmitFunctionAlterTech)}
          >
            <Select disabled={true} name="Nome da tecnologia">
              <option>{techClicked.title}</option>
            </Select>
            <Select name="Status" register={registerAlterTech} registerName="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <TagError>{errorsAlterTech.status?.message}</TagError>
            <div>
              <Button color="negative" type="submit">Salvar alterações</Button>
              <Button
                color="grey"
                onClick={() => {
                  deleteTech(techClicked.id);
                  setHiddenAlterTech(true);
                }}
              >
                Excluir
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </Container>
  );
};

export default Home;
