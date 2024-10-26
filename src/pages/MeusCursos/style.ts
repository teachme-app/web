import { FormControl } from '@mui/material'
import styled from 'styled-components'

export const ContainerCursos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`

export const Curso = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  height: 20%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CursoImg = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`

export const FormControlStyle = styled(FormControl)`
  width: 80%;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  margin-left: 40px;
  text-decoration: none;
`
