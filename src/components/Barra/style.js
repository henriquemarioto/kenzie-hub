import styled from "styled-components"

export const BarraStyled = styled.div`
    position: relative;

    div{
        width: 100vw;
        height: 1px;
        background-color: var(--grey-3);

        //Centrealizar independente do container
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`