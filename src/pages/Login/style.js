import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;

    h1{
        margin-bottom: 10px;
        text-align: center;
    }

    form{
        max-width: 300px;
        margin: 0 auto;
        h2{
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        > button{
            margin-top: 10px;
            width: 100%;
        }

        > button:nth-of-type(2){
            margin-top: 10px;
        }

        h3{

            font-size: 12px;
            margin-top: 20px;
        }
    }

    

    
`