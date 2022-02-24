import { FundoPreto, Container } from "./style";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import TagError from "../TagError";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../services/api";

const NewTechModal = ({ className, setHidden }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
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
      .post("/users/techs", data, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("@KenzieHub:token")}`,
        },
      })
      .then((res) => {
        toast.success("Cadastrado com sucesso");
        console.log(res)
        setHidden("hidden");
      })
      .catch((res) => {
        toast.error("Algo deu errado");
        console.log(res)
      });
  };

  return (
    <FundoPreto className={className}>
      <Container>
        <div>
          <p>Cadastrar Tecnologia</p>
          <Button onClick={() => setHidden("hidden")}>X</Button>
        </div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="Nome"
            placeholder="Ex: React.js"
            register={register}
            registerName="title"
          />
          <TagError>{errors.title?.message}</TagError>
          <Select
            name="Selecionar status"
            register={register}
            registerName="status"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <TagError>{errors.status?.message}</TagError>
          <Button>Cadastrar Tecnologia</Button>
        </Form>
      </Container>
    </FundoPreto>
  );
};

export default NewTechModal;
