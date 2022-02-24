import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > p {
        font-size: 12px;
        margin-bottom: 5px;
    }

    div{
        background-color: var(--grey-2);
        padding: 5px;
        border: 1px solid transparent;
        border-radius: 5px;
        transition: 0.2s;
        
        :focus-within{
            border-color: #fff;
        }
    }
`

export const SelectStyled = styled.select`
    width: 100%;
    
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    color: #fff;    
    padding: 5px;

    :focus{
        outline: none;
    }

    option{
        background-color: var(--grey-2);       
    }


`