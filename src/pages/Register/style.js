import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 370px;

    > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > button{
            width: auto;
        }
    }

    form{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3{
            margin: 20px 0;
        }

        > button{
            margin-top: 10px;
        }
    }
`