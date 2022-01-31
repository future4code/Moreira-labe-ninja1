import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  background-color: white;
  padding: 1em;
  border-bottom: 2px solid #1DAE9D;
`

const Img = styled.img`
  width: 30%;

`

const Botao = styled.button ` 
    border-radius: 0.8em;
    border: 1px solid #1DAE9D;
    background-color: white;
    color: #625555;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.5em;
    font-size: 1em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #1DAE9D;
        transform: scale(1.3);
      }
      :active{
        background-color: #1DAE9D;
      }
`

class HeaderHome extends Component {
    render() {
        return (
            <Header>
                <div>
                  <Img src="https://i.postimg.cc/wj5LbG8M/Logo-Est-tica-2.png"></Img>
                </div>
                <Botao>Quer ser um ninja</Botao>
                <Botao>Contratar um ninja</Botao>
                <Botao></Botao>
            </Header>
        );
    }
}

export default HeaderHome;
