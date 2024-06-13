import { IconButton } from '@mui/material'
import styled from 'styled-components'

export const LeftSideContainer = styled.div`
  width: 50%;
  background-color: #ff9740;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.div`
  color: white;
  align-self: center;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 15px;
    font-size: 50px;
  }
  p {
    margin-bottom: 25px;
    font-size: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    border: 1px solid white;
    padding: 10px;
    border-radius: 20%;
    align-self: center;
    width: 300px;
    text-align: center;
  }
`

export const Formulario = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  height: 40%;
  background-color: #fbf4ea;
  border-radius: 30px;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  align-items: center;
  h1 {
    text-align: center;
    margin-top: 30px;
    color: #ff9740;
  }
  p {
    text-align: center;
    margin-top: 5px;
    color: #ff9740;
  }
  input[type='text'],
  [type='password'] {
    width: 70%;
    margin-top: 20px;
    height: 40px;
    padding-left: 12px;
    border: 0;
    background-color: #dddddd7e;
  }
  input[type='submit'] {
    width: 50%;
    height: 35px;
    margin-top: 20px;
    border: 2px solid #ff9740;
    border-radius: 20px;
    background-color: #fbf4ea;
    font-weight: 600;
    color: #ff9740;
  }
`

export const Wave = styled.img`
  align-self: flex-end;
  margin-top: auto;
`

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const RightSideContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  margin-left: 15px;
  margin-top: 15px;
`

export const MenuButton = styled(IconButton)`
  color: white;
`
