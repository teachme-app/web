
import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
`;


export const ImageContainer = styled.div`
img{
width: 98%;
margin-left: 4%;
}

`

export const LeftSideContainer = styled.div`
width: 50%;

height: 100vh;
display: flex;
flex-direction: column;
`

export const img = styled.img`
margin-top: 6%;
  margin-left: 40px;
  display: flex;


`


export const TitleContainer = styled.div`
    h1 {
      
        font-size:50px;
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
margin-left: 91%;
margin-top: -45%;
height: 30%;
background-color: #00000000;
border:none


`
export const RightSideContainer = styled.div`
width: 50%;
  height: 100vh;
  margin-left: 1%;
  margin-top: 2%;

  border-radius: 0px;



`
export const div2 = styled.div`
background-color: #383141;
border-radius: 40px;
width: 90%;
height: 60%;
margin-left: auto;
margin-right: auto;
margin-top: 2%;
h1{
margin-left: 48%;
font-size: 370%;
margin-top: -33%;
color: #FF9740;
}

p { 
color: #FBF4EA;
margin-top: 13%;
margin-left: 5%;
margin-right: 1%;
font-size: 99%;
font-weight: 600;

}
`
export const BottomSideContainer = styled.div`
margin-left:16%;
margin-top: 3%;

`
export const div3 = styled.div`
h1{
font-size: 50px;
color: #FF9740;
}
`
export const button = styled.button`
margin-left: -5px;
margin-top: 5%;

font-size: 30px;
font-weight: 600;
color: #383141;
height: 10vh;
width: 82%;

background-color: #D9D9D9;
border: none;
border-radius: 45px;

&:hover {
    background-color: #ccc;
  }
`
export const img2 = styled.img`
width: 40%;
height: 40%;
margin-top: 4%;
margin-left: 5%;
`


export const Container = styled.div`
  display: flex;
  widht: 100vh;
  height: 100vh;
`