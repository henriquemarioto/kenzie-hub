import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10px;

    .hidden{
        display: none;
    }
`

export const ContainerTitle = styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;

    h1{
        display: flex;
        align-items: center;
    }

    button{
        width: auto;
    }
`

export const ContainerInfo = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        margin-bottom: 10px;
    }

    h3{
        margin-top: 10px;
    }
`

export const ContainerTecnologias = styled.div`
    margin-top: 20px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 18px;
        }

        button{
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            span{
                margin: 0;
                padding: 0;
                font-weight: bold;
                font-size: 20px;
                padding-bottom:  3px;
            }
            
        }
    }

    ul{
        margin-top: 20px;
    }

`
