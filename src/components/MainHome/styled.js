import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    width: 280px;
    height: 82px;
    left: 76px;
    top: 500px;
    background: #c1faf3;
    color: black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    font-size: 20px;
        :hover{
            background-color: #2d6b64;
            color:white;
            transform: scale(1.1);
      }
        :active{
            background-color: #2d6b64;
            color: white;
      }
        
`

export const ContainerPagina = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 50px;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-right: 5px;
    margin-left: 5px;
`

