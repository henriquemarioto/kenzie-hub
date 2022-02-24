import { Container } from "./style";
import Title from "../../components/Title";
import Form from "../../components/Form";
import SubTitle from "../../components/SubTitle";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../services/api";

const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Precisa conter letra maiúscula, minúscula, numero e caractere especial (#?!@$%^&*-)"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    kenzieHubApi
      .post("/users", { email: data.email, password: data.password })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  return (
    <Container>
      <Title />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <SubTitle>Login</SubTitle>
        <Input
          placeholder="Digite seu email*"
          name="Email"
          register={register}
          registerName={"email"}
        />
        <TagError>{errors.email?.message}</TagError>

        <Input
          placeholder="Digite sua senha*"
          name="Senha"
          register={register}
          registerName={"password"}
          type="password"
        />
        <TagError>{errors.password?.message}</TagError>

        <Button type="submit">Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button
          color="grey"
          type="button"
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
