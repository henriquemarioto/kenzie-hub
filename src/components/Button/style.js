import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    width: 100%;
    padding: 10px;
    color: var(--white);
    background-color: ${props => props.color === 'grey' ? css`var(--grey-1)` : props.color === 'negative' ? css`var(--color-primary-negative)` : css`var(--color-primary)`};
    border-radius: 5px;
`