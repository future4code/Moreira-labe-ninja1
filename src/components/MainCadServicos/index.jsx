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
                            <option value="name"> Título </option>
                            <option value="value"> Preço </option>
                        </select>
                        <input type="text" placeholder="Digite um titulo"/>
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
