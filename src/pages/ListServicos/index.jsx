import React, { Component } from 'react';

import {Container, ContainerServicos} from './styled'

import HeaderAll from '../../components/HeaderAll';

import Footer from '../../components/Footer';

import axios from 'axios';

const url = "https://labeninjas.herokuapp.com/jobs"

const headers = {
    headers: {
        Authorization: "d8390f50-0fe3-4542-9ec1-78750ba98faa"
    }
}

class ListServicos extends Component {

    state = {
        cardList: [],

    }

    componentDidMount(){
        this.getCardList()
    }

    getCardList = async() => {
        try{
            const response = await axios.get(url, headers)
            // console.log(response)
            this.setState({cardList: response.data.jobs})
        } catch (error) {
            alert ("Algo deu errado, tente novamente!")
        }
    }

    render() {
        return (
            <ContainerServicos>
             <HeaderAll/>
            <Container>
            <div className="container_search">
                <input type="text" placeholder="Valor Minimo" />
                <input type="text" placeholder="Valor Maximo" />
                <input type="text" placeholder="Busca por titulo ou descricao" />
                <input type="text" placeholder="Sem Ordenacao" />
            </div>
            <div className="container_list">
                {this.state.cardList.map((res) => (
                <ul>
                    <li>
                        <div className="card">
                            <div>{res.title}</div>
                            <div className="price">{res.price}</div>
                            <div>{res.dueDate}</div>
                            <div className="buttons_card">
                                <button>Ver detalhes</button>
                                <button>Add Carrinho</button>
                            </div>
                        </div>
                    </li>                      
                </ul>
                ))}
            <div>
            </div>    
            </div>
            </Container>
            <Footer/>
            </ContainerServicos>
        );
    }
}

export default ListServicos;
