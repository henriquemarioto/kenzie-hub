import {ButtonStyled} from './style'

const Button = ({children, type = "button", ...rest}) => {
    return <ButtonStyled type={type} {...rest}>{children}</ButtonStyled>
}

export default Button