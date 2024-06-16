import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`


export const Banner = styled.div`
  width: 93%;
  background-color:;
  height: 250px;
  display: flex;
  margin-top: 50px;
`

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const ImgCurso = styled.div`
 margin-top: 10%;  
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 40px;

`

export const Curso1 = styled.div`
  
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  display: flex;
  flex-direction: column;
  background-image:  url('/public/curso1.png');

  &:hover {
    transform: scale(1.05);
  }

  h1 {
    position: absolute;
    padding: 0 0 20px 10px;
    color: #000000;
    font-size: 17px;
    margin-top: 210px;
  }
`

export const Curso2 = styled.div`
  
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  display: flex;
  flex-direction: column;
  background-image:  url('/public/curso2.png');

  &:hover {
    transform: scale(1.05);
  }

  h1 {
    position: absolute;
    padding: 0 0 20px 10px;
    color: #000000;
    font-size: 17px;
    margin-top: 210px;
  }
`

export const Curso3 = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  display: flex;
  flex-direction: column;
  background-image: url('public/curso3.png');

  &:hover {
    transform: scale(1.05);
  }

  h1 {
    position: absolute;
    padding: 0 0 20px 10px;
    color: #000000;
    font-size: 17px;
    margin-top: 210px;
  }
`