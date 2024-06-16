import { Grid } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Grid)`
  background-color: #ff9740;
  width: auto;
  height: 95px;
  display: flex;
  margin-bottom: -10px;
`

export const MenuContainer = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`

export const LogoItem = styled.img`
  margin-left: 10px;
`

export const MenuItem = styled(Grid)`
  align-items: center;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

export const ItemLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 20px;
`

export const Items = styled.li`
  margin-left: 10px;
`

export const InputItem = styled.li`
  margin-right: 10px;
  margin-left: 10px;
  
`

export const Input = styled.input`
  width: 95%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  
`
