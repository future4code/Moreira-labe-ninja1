import React, { Component } from "react";

import { Container, ContainerServicos } from "./styled";

import HeaderAll from "../../components/HeaderAll";

import Footer from "../../components/Footer";

import axios from "axios";

import { AiOutlineDelete } from "react-icons/ai";

const url = "https://labeninjas.herokuapp.com/jobs";

const headers = {
  headers: {
    Authorization: "d8390f50-0fe3-4542-9ec1-78750ba98faa",
  },
};

class ListServicos extends Component {
  state = {
    cardList: [],
        cartItens: []
  };

  componentDidMount() {
    this.getCardList();
  }

  getCardList = async () => {
    try {
      const response = await axios.get(url, headers);
      // console.log(response)
      this.setState({ cardList: response.data.jobs });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  
};
   onClickAdd = (servicosAdd) => {
       const newServicosAdd = [...this.state.cartItens] 
       newServicosAdd.includes(servicosAdd) === true ? alert("Esse serviço já foi adicionado ao seu Carrinho!!"): newServicosAdd.push(servicosAdd) 
       this.setState({cartItens:newServicosAdd})

    }
    
    onClickRemove = (id) => {
        const newCart = this.state.cartItens.filter((res) => {
            return res.id !== id
             
        }).map((services) =>{
            return services 
        })
            this.setState({cartItens: newCart})
    }



  render() {
      const somaPrecos = this.state.cartItens.reduce((a,b) => a + b.price,0)
        return (
        <ContainerServicos>
            <HeaderAll countCartItens={this.state.cartItens.length} />
            <Container>
          <div className="container_search">
            <input type="text" placeholder="Valor Minimo" />
            <input type="text" placeholder="Valor Maximo" />
            <input type="text" placeholder="Busca por titulo ou descricao" />
            <input type="text" placeholder="Sem Ordenacao" />
          </div>
          <div className = "containerMainList">
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
                        <button onClick={()=> this.onClickAdd(res)} >Add Carrinho</button>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
              <div></div>
            </div>
            <div className="container_cart">
              <div className="header">
                <p>Sacola</p>
              </div>
              <div className="main">
                  {this.state.cartItens.map(res => {
                      return (
                        <ul>
                        <li>
                          <div>{res.title}</div>
                          <div>
                            <strong>R$ {res.price}</strong>
                          </div>
                          <div>
                            <AiOutlineDelete onClick={()=> this.onClickRemove(res.id)}/>
                          </div>
                        </li>                  
                      </ul>
                    )
                  })                  
                }
              </div>
              <div className="footer">
                <p>Total:R$ {somaPrecos}</p>
                <button>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </ContainerServicos>
    );
  }
}

export default ListServicos;
