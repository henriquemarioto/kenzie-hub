import { Container } from "./style";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import ThirtTitle from "../../components/ThirtTitle";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import TagError from "../../components/TagError";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { kenzieHubApi } from "../../services/api";

const Register = ({ auth }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Precisa conter letra maiúscula, minúscula, numero e caractere especial (#?!@$%^&*-)"
      ),
    confirmpassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    kenzieHubApi
      .post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: "Escreva sua bio",
        contact: "Coloque seu contato",
        course_module: data.course_module,
      })
      .then((res) => {
        toast.success("Tudo certo");
        setTimeout(() => history.push("/login"), 500);
      })
      .catch((res) => {
        console.log(res);
        toast.error("Algo deu errado");
      });
  };

  const backToLogin = () => {
    history.push("/login");
  };

  return (
    <Container>
      <div>
        <Title />
        <Button onClick={backToLogin} color="dark">
          Voltar
        </Button>
      </div>

      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <SubTitle>Crie sua conta</SubTitle>
        <ThirtTitle>Rapido e grátis, vamos nessa</ThirtTitle>
        <Input
          placeholder="Digite aqui seu nome"
          name="Nome"
          register={register}
          registerName="name"
        />
        <TagError>{errors.name?.message}</TagError>

        <Input
          placeholder="Digite aqui seu email"
          name="Email"
          register={register}
          registerName="email"
        />
        <TagError>{errors.email?.message}</TagError>

        <Input
          placeholder="Digite aqui sua senha"
          name="Senha"
          register={register}
          registerName="password"
          type="password"
        />
        <TagError>{errors.password?.message}</TagError>

        <Input
          placeholder="Digite aqui sua senha"
          name="Confirmar senha"
          register={register}
          registerName="confirmpassword"
          type="password"
        />
        <TagError>{errors.confirmpassword?.message}</TagError>

        <Select
          name="Selecionar módulo"
          register={register}
          registerName="course_module"
        >
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
        </Select>
        <TagError>{errors.course_module?.message}</TagError>

        <Button type="submit" color="negative">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
