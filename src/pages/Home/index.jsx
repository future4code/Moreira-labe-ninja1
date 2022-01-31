import React, { Component } from 'react';
import Header from '../../components/HeaderHome'
import MainHome from '../../components/MainHome';

import {} from './styled'


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainHome/>
                
            </div>
        );
    }
}

export default Home;
