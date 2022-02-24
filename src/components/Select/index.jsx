import { Container, SelectStyled } from "./style";

const Select = ({ children, name, register, registerName, ...rest }) => {
  return (
    <Container>
      <p>{name}</p>
      <div>
        {register ? (
          <SelectStyled {...register(registerName)}>{children}</SelectStyled>
        ) : (
          <SelectStyled {...rest}>{children}</SelectStyled>
        )}
      </div>
    </Container>
  );
};

export default Select;
