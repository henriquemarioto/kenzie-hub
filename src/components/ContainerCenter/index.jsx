import { ContainerCenterStyled } from "./style"

const ContainerCenter = ({ children, ...rest }) => {
  return <ContainerCenterStyled>{children}</ContainerCenterStyled>;
};

export default ContainerCenter;
