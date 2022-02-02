import React, { Component } from 'react';
import {ImFacebook} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import {ImLinkedin2} from 'react-icons/im';
import {SiVisa} from 'react-icons/si';
import {RiMastercardLine} from 'react-icons/ri';
import {RiPaypalLine} from 'react-icons/ri';
import {SiPicpay} from 'react-icons/si';
import styled from 'styled-components';



const AreaFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 1em;
    border-top: 2px solid #1DAE9D;   
`

const RedesSociais = styled.div`
    display: flex;
    width: 30%;
    color: #1DAE9D;
    font-size: 1.5em;
    padding-right: 0.5em;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const MeiosPagamento = styled.div`
    display: flex;
    width: 15%;
    color: #f1189e;
    font-size: 1.5em;
    padding-right: 0.5em;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const Colunas1 = styled.div`
    color: #f1189e;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
`

class Footer extends Component {
    render() {
        return (
            <AreaFooter>
               <RedesSociais>
                   <ImFacebook/>
                   <BsInstagram/>
                   <BsTwitter/>
                   <BsWhatsapp/>
                   <AiFillYoutube/>
                   <ImLinkedin2/>
               </RedesSociais>               

               <div>
                   <Colunas1>Institucional</Colunas1>
                    <p>A Marca</p>
                    <p>Lojas</p>
                    <p>Contato</p>
               </div>
               <div>
                   <Colunas1>Informações</Colunas1> 
                    <p>Formas de Pagamento</p>
                    <p>Trocas e Devoluções</p>
                    <p>Cuidados com o Produto</p>
               </div>
               <div>
                   <Colunas1>Conheça</Colunas1> 
                    <p>Franquias e Multimarcas</p>
                    <p>Trabalhe com a Gente</p>
                    <p>Procon-RJ</p>
               </div>
               <MeiosPagamento>
                   <SiVisa/>
                   <RiMastercardLine/>
                   <RiPaypalLine/>
                   <SiPicpay/>
               </MeiosPagamento>
            </AreaFooter>
        );
    }
}

export default Footer;
