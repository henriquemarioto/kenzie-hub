import { Container } from "./style";
import ContainerCenter from "../../components/ContainerCenter";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import ThirtTitle from "../../components/ThirtTitle";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";

import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../services/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";

const Login = ({ auth, setAuth }) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { user } = useSelector(store => store);
  console.log(user)

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    await dispatch(signInThunk({ email: data.email, password: data.password }));
    console.log('fim')
    // kenzieHubApi
    //   .post("/sessions", { email: data.email, password: data.password })
    //   .then((res) => {
    //     setAuth(true);
    //     localStorage.setItem("@KenzieHub:userId", res.data.user.id);
    //     localStorage.setItem("@KenzieHub:token", res.data.token);
    //     toast.success("Logado com sucesso");
    //     history.push("/home");
    //   })
    //   .catch((res) => {
    //     toast.error("Algo deu errado");
    //   });
  };

  if (auth) {
    return <Redirect to="/home" />;
  }

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
        <ThirtTitle>Ainda não possui uma conta?</ThirtTitle>
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
