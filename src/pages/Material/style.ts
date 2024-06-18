import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FF9740;
    
  }
`;

export const Exibicao = styled.div`
background: #FFFFFF;
width: 100%;
height: 100vh;
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
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -15%;
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
   font-size: 50px;
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
