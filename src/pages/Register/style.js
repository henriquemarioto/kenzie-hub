import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > button{
            background-color: var(--grey-3);
            width: 100px;
        }
    }

    form{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span{
            font-size: 12px;
            text-align: center;
            display: block;
            margin: 20px 0;
            color: var(--grey-1);

        }

        > button{
            margin-top: 10px;
        }
    }
`