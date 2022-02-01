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

               <div>Institucional</div>
               <div>Informações</div>
               <div>Conheça</div>
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
