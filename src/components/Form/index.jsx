import {FormStyled} from './style'

const Form = ({children, ...rest}) => {
    return <FormStyled {...rest}>{children}</FormStyled>
}

export default Form