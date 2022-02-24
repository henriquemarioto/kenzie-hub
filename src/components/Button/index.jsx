import {ButtonStyled} from './style'

const Button = ({children, ...rest}) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button