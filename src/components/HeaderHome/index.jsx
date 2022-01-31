import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.div`
  background-color: white;
  padding: 1.5em;
  border-bottom: 2px solid #1DAE9D;
`


class HeaderHome extends Component {
    render() {
        return (
            <Header>
                Hello HeaderHome
            </Header>
        );
    }
}

export default HeaderHome;
