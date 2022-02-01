import React, { Component } from 'react';
import {Button, ContainerPagina} from './styled';
import {Link} from 'react-router-dom';

const Button = styled.button`
    position: absolute;
    width: 320px;
    height: 82px;
    left: 76px;
    top: 500px;
    background: #1DAE9D;
    border-radius: 10px;
    font-size: 20px;
`

const ContainerPagina = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 50px;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-right: 5px;
    margin-left: 5px;
`
class MainHome extends Component {
    render() {
        return (
            <div>
                      
                <ContainerPagina>
                    
                        <p>
                                <h1>Quem somos?</h1>
                            Somos uma plataforma que conecta clientes e profissionais, 
                            com mais de 100 tipos de serviços disponíveis.

                            Nascemos em 2016, com o propósito de conectar quem precisa com quem sabe. 
                            E nosso maior desejo é ser a ponte que oferece ajuda
                            para quem precisa, com muito empenho, dedicação e visão.

                            Empenho, não medimos esforços para que sua experiência seja a melhor possível.
                            Dedicação, nossa dedicação vai desde o seu primeiro contato conosco até a conclusão de nosso serviço.
                            Visão, sabemos que a praticidade é o que todo mundo busca hoje em dia.

                            Para isso, buscamos desenvolver em todo profissional 
                            habilidades ninjas, pois acreditamos que em todo mundo há uma história 
                            de sucesso que podemos tornar realidade.
                        </p>

                    <Link to="/listservivos"><Button>Descubra</Button></Link>
                </ContainerPagina>
               
          </div>
        );
    }
}

export default MainHome;
