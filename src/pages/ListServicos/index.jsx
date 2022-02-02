import React, { Component } from 'react';

import {Container} from './styled'

import HeaderAll from '../../components/HeaderAll';

import Footer from '../../components/Footer';

class ListServicos extends Component {
    render() {
        return (
            <>
             <HeaderAll/>
            <Container>
            <div className="container_search">
                <input type="text" placeholder="Valor Minimo" />
                <input type="text" placeholder="Valor Maximo" />
                <input type="text" placeholder="Busca por titulo ou descricao" />
                <input type="text" placeholder="Sem Ordenacao" />
            </div>
            <div className="container_list">
                <ul>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <div>Desenvolvedor Js</div>
                            <div className="price">R$ 380</div>
                            <div>Prazo:10/05/2020</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>
                    
                        
                </ul>
            <div>
            </div>    
            </div>
            </Container>
            <Footer/>
            </>
        );
    }
}

export default ListServicos;
