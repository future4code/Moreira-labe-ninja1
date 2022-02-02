import styled from 'styled-components'


export const ContainerServicos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100vh;

    .container_search {
        height: 100px;
        align-items: center; display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));
        grid-gap: 20px;
        
        justify-content: space-around;
    }
    .container_search input {
        border-radius: 8px;
        border: 1px solid #1DAE9D;
        padding:12px 24px;
    }
    .container_list {
        margin-top: 100px;
    }
    .container_list ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
        grid-gap: 20px;
        padding: 0;
        
        
    }
    .container_list li {
        background-color: #1DAE9D;
        padding: 30px;
        color: #FFFFFF;
        font-weight: bold;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        border-radius: 8px;
                
    }
    .buttons_card {
        margin-top: 20px;
    }
    .buttons_card button {
        padding: 12px 20px;
        border: 0;
        border-radius: 8px;
        margin-right: 10px;
        cursor: pointer;
        background-color: #FFFFFF;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    .card .price {
        margin: 10px;
        background-color: #FFFFFF;
        width: 60px;
        color: #1DAE9D;
        border-radius: 8px;
        padding: 10px;
    }
`;