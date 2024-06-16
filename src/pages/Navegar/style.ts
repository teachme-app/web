import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Banner = styled.div`
  width: 93%;
  height: 250px;
  display: flex;
  margin-top: 50px;
`

export const CursosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Cursos = styled.div`
  margin-top: 10%;
  width: 93%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 40px;
`

export const Curso = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

export const CursoTitle = styled.h1`
  color: #000000;
  font-size: 17px;
  margin-top: 10px;
`

export const CursoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
