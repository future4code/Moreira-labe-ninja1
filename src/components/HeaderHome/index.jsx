import React, { Component } from 'react';
import styled from 'styled-components'
import { GiBeachBag } from "react-icons/gi";



const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1em;
  border-bottom: 2px solid #1DAE9D;
`

const Img = styled.img`
  width: 30%;

`
const DivSacola = styled.div`
margin-left: 1em;

`

const DivNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`


const Botao = styled.button ` 
    border-radius: 0.3em;
    border: 1px solid #1DAE9D;
    background-color: white;
    color: #625555;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.5em;
    font-size: 0.8em;
    margin-left: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #1DAE9D;
        color:white;
        transform: scale(1.1);
      }
      :active{
        background-color: #1DAE9D;
        color: white;
      }
`

class HeaderHome extends Component {
    render() {
        return (
            <Header>
                <div>
                  <Img src="https://i.postimg.cc/wj5LbG8M/Logo-Est-tica-2.png"></Img>
                </div>
                <DivNav>
                  <Botao>Quer ser um ninja</Botao>
                  <Botao>Contratar um ninja</Botao>
                  <DivSacola><GiBeachBag/></DivSacola>
                </DivNav>
                
            </Header>
        );
    }
}

export default HeaderHome;
