
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
`;


export const Container = styled.div`
backgroundColor: '#99999',

`

export const LeftSideContainer = styled.div`
width: 50%;
background-color: ;
height: 100vh;
display: flex;
flex-direction: column;
`

export const img = styled.img`

margin-top: 30px;
margin-left: 40px;
  display: flex;
  width: 100%;


`


export const TitleContainer = styled.div`
    h1 {
      
        font-size: 60px;
        text-decoration: underline;
        color: #FF9740;
    }
        margin-top: 2%;
        margin-left: 4%;
        
`

export const TextContainer = styled.div`
margin-top: 20px;
margin-left: 4%;
color: #545454;
font-weight: bold;
`
export const HeartButton = styled.button`
margin-left: 94%;
margin-top: -37%;
height: 30%;
background-color: #00000000;
border:none


`
export const RightSideContainer = styled.div`
width: 44%;
  height: 490px;
  margin-left: 55%;
  margin-top: -52%;
  background-color: #383141;
  border-radius: 52px;



`
export const div2 = styled.div`
h1{
margin-left: 45%;
font-size: 60px;
margin-top: -25%;
color: #FF9740;
}

p { 
color: #FBF4EA;
margin-top: 11%;
margin-left: 5%;
margin-right: 1%;
font-size: 99%;
font-weight: 600;

}
`
export const BottomSideContainer = styled.div`
margin-left: 62%;
margin-top: 3%;

`
export const div3 = styled.div`
h1{
font-size: 370%;
color: #FF9740;
}
`
export const button = styled.button`
margin-left: 10%;
margin-top: 5%;
font-size: 30px;
font-weight: 600;
color: #383141;
height: 100px;
width: 450px;

background-color: #D9D9D9;
border: none;
border-radius: 45px;

&:hover {
    background-color: #ccc;
  }
`
export const img2 = styled.img`
width: 290px;
height: 290px;
margin-top: 5%;
margin-left: 5%;

`
export default GlobalStyle;