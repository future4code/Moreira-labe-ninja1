import styled from 'styled-components'


export const ContainerServicos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Container = styled.div`
    margin: 50px auto;
    width: 90%;
    height: 100%;

    .container_search {
        height: 100px;
        align-items: center; 
        display: grid;
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

    .container_list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
        grid-gap: 20px;
        padding: 0;
    }

    .container_list li {
        /* background-color: #1DAE9D; */
        padding: 30px;
        color: #0000;
        font-weight: bold;
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
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
        width: auto;
        color: #1DAE9D;
        border-radius: 8px;
        padding: 10px;
    }

    .container_cart {
        display: flex;
        background-color: #FFFFFF;
        width: 100%;
        height:60vh;
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 110px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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

    .containerMainList {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 50px;               
    }
      .containerMainListOff {
        display: grid;
        grid-template-columns: 1fr;
        gap: 50px;
      }
    /* .ContentAll {
        transition: transform 1s;
        transform-style: preserve-3d;
    }
    .card:hover .ContentAll {
        transform: rotateY(180deg);
        transition: transform 0,5s;
    }
    .Front,
    .Back {
    position: absolute;
    height: 100%;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    border-radius: 10px;
    backface-visibility: hidden;
  }
    .Back {
    background: #03446A;
    color: white;
    transform: rotateY( 180deg );
  } */

  .card {
  width: 450px;
  height: 300px;
  perspective: 1000px;
  padding: 20px;

}

.ContentAll {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.card:hover .ContentAll {
  transform: rotateY(180deg);
}

.Front, .Back {
  position: absolute;
    
    height: 100%;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    border-radius: 10px;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
}

.Front {
  background-color: #1DAE9D;
  color: black;
  padding: 20px;
}

.Back {
    position: absolute;
    background-color: #1DAE9D;
    height: 100%;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    border-radius: 10px;
  transform: rotateY(180deg);
}
`;


