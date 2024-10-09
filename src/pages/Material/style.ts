import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFFFF;
    
  }
`;

export const Exibicao = styled.div`
margin-left: 20%;
width: 100%;
height: 100vh;
flex-direction: column;

img{
width: 50%;
height: 90%;
margin-left: 5%;
position: absolute; 
margin-top: -5%;

}
`
export const exibicao2 = styled.div`
img{
width: 50%;
height: 90%;
margin-left: 5%;
opacity: 1;

 transition: opacity 1s ease, transform 0.3s ease; 

    &:hover {
      opacity: 0; 
       

}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
div{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -32%;
  border-radius: 7px;
}
  p{
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-left: 60px;
   margin-right: 60px;
   font-size: 16px;
   color: #383141;
   font-weight: 600;
  }
   h1{
   font-size: 40px;
   margin-bottom: 20px;
   color: #383141;
  font-weight: 700;

   }
`


export const ContainerMockup = styled.div`
`
export const container1 = styled.div`
`
export const Menu = styled.div`
`

export const Informacoes = styled.div`
margin-top: -13%;
margin-left: 60px;
color: #383141;
  font-weight: 700;
`
export const Submit = styled.div`
`

export const Button = styled.button`
  background: #FF9740;
  color: white;
  border-style: outset;
  border-color: #FF9740;
  height: 60px;
  width: 20vh;
  font: bold 15px arial, sans-serif;
  text-shadow: none;
  margin-left: 44%;
  margin-top: -53%;
  border-radius: 100px;
  cursor: pointer; /* Adiciona o cursor de mão ao passar o mouse */

  /* Efeito hover */
  &:hover {
    background: #e6892e; /* Cor de fundo ao passar o mouse */
    border-color: #e6892e; /* Altera a cor da borda */
  }
`;
