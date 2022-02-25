import {LiStyled} from './style'

const Li = ({children, ...rest}) => {
    return <LiStyled {...rest}>{children}</LiStyled>;
}

export default Li