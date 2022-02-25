import styled from "styled-components";

export const FundoPreto = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
`

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;        
`

export const Header = styled.div`
    background-color: var(--grey-2);
    border-radius: 5px 5px 0 0;
    padding: 10px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    button{
        padding: 0;
        color: var(--grey-1);
        background-color: transparent;
        width: 20px;
        height: 20px;

        :hover{
            cursor: pointer;
        }
    }
    
`

export const Content = styled.div`
    width: 100%;
    padding: 10px;
    background-color: var(--grey-3);
    border-radius: 0 0 5px 5px;
`