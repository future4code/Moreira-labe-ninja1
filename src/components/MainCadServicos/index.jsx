import React, { Component } from 'react';

import { Container } from './styled'

class MainCadServicos extends Component {
    render() {
        return (
            <Container>
                <div className="main_cad">
                    <h1>Cadastre o seu serviço </h1>
                    <div className="form">
                        <input type="text" placeholder="Digite um titulo"/>
                        <input type="text" placeholder="Digite um titulo"/>
                        <input type="text" placeholder="Digite um titulo"/>
                        <select>
                            <option value="name"> Cartão de Débito </option>
                            <option value="value"> Cartão de Crédito </option>
                            <option value="value"> PayPal </option>
                            <option value="value"> Boleto </option>
                            <option value="value"> Pix </option>
                        </select>
                        <input type="date" placeholder="dd/mm/aaaa"/>
                        <div className="form_button">
                            <button>Cadastrar Serviço</button>
                        </div>
                        
                    </div>
                   
                </div>
                
            </Container>
        );
    }
}

export default MainCadServicos;
