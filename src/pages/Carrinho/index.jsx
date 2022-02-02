import React, { Component } from 'react';

import {AiOutlineDelete} from 'react-icons/ai'

import {Container} from './styled'

import HeaderAll from '../../components/HeaderAll';

import Footer from '../../components/Footer';

class Carrinho extends Component {
    render() {
        return (
            <>
            <HeaderAll/>
            <Container>
                <div className="container_cart">
                    <div className="header">
                        <p>Sacola</p>
                    </div>
                    <div className="main">
                        <ul>
                            <li>
                                <div>Desevolvedor JS </div>
                                 <div><strong>R$ 49,90</strong></div> 
                                 <div><AiOutlineDelete /></div>
                            </li>
                            <li>
                                <div>Desevolvedor JS </div> 
                                <div><strong>R$ 49,90</strong></div> 
                                <div><AiOutlineDelete /></div>
                            </li>
                            <li>
                                <div>Desevolvedor JS </div>
                                 <div><strong>R$ 49,90</strong></div>
                                  <div><AiOutlineDelete /></div>
                            </li>
                            <li>
                                <div>Desevolvedor JS </div>
                                <div><strong>R$ 49,90</strong></div>
                                <div><AiOutlineDelete /></div>
                            </li>
                            <li>
                                <div>Desevolvedor JS </div>
                                <div><strong>R$ 49,90</strong></div>
                                <div><AiOutlineDelete /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer">
                        
                        <p>Total:R$ 149,00</p> 
                        <button>Finalizar Compra</button>
                        
                    </div>
                
                </div>
            </Container>
            <Footer/>
            </>
        );
    }
}

export default Carrinho;
