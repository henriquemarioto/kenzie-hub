import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    p{
        text-align: left;
        font-size: 12px;
    }

    div{
        background-color: var(--grey-2);
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        transition: 0.2s;

        :focus-within{
            border-color: var(--grey-0);
        }

        input{
            font-size: 14px;
            background-color: var(--grey-2);
            width: 100%;
            
            :focus{
                outline: none;
            }
        }

        button{
            margin: 0;
            margin-left: 10px;
            background-color: transparent;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    
`