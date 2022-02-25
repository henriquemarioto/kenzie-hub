import { FundoPreto, Container, Header, Content } from "./style";
import Button from "../Button";

const Modal = ({ className, hidden, name, children }) => {
  

  return (
    <FundoPreto className={className}>
      <Container>
        <Header>
          <p>{name}</p>
          <Button onClick={() => hidden(true)} color="dark">X</Button>
        </Header>
        <Content>{children}</Content>
      </Container>
    </FundoPreto>
  );
};

export default Modal;
