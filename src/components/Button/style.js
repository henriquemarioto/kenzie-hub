import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    width: auto;
    padding: 10px 20px;
    border-radius: 5px;
    color: var(--white);
    background-color: ${props => props.color === 'grey' ? css`var(--grey-1)` : props.color === 'negative' ? css`var(--color-primary-negative)` : props.color === 'dark' ? css`var(--grey-3)` : css`var(--color-primary)`};
    transition: 0.2s;

    :hover{
        background-color: ${props => props.color === 'grey' ? css`var(--grey-2)` : props.color === 'negative' ? css`var(--color-primary-focus)` : props.color === 'dark' ? css`var(--grey-2)` : css`var(--color-primary-focus)`};
    }
`