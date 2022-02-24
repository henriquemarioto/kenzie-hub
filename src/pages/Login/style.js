import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-bottom: 10px;
    }

    form{
        h2{
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        button{
            margin-top: 10px;
        }

        > button:nth-of-type(2){
            margin-top: 10px;
        }

        span{
            color: var(--grey-1);
            display: block;
            text-align: center;
            font-size: 12px;
            margin-top: 20px;
        }
    }

    

    
`