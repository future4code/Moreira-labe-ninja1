import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    background: #1DAE9D;
    width: 70%;
    height: 80vh;
    border-radius: 12px;

    .container_cart {
        display: flex;
        background-color: #FFFFFF;
        width: 40%;
        height:60vh;
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
    }
    .header {
        border-bottom: 1px solid #1DAE9D;
        padding-left: 10px;
    }
    .header p {
        font-size: 24px;
        color: #1DAE9D;
    }
    .main {
        margin: 0 auto;
        width: 100%;
        height: 60vh;
        overflow-y:scroll;
    }
    .main ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        
        
    }
    .main li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    }
    .footer {
        display: flex;
        background-color: #CCCCCC;
        padding: 10px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius:0 0 12px 12px;
    }
    .footer p {
        font-weight: bold;
    }
    .footer button {
        background: #1DAE9D;
        color: #FFFFFF;
        padding:10px 30px;
        border: 0;
        border-radius: 4px;
        text-transform: uppercase;
        cursor: pointer;

    }

`