import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffa500;
  color: white;
  text-align: center;
  position: relative;
`

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`

const HomeLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #ffa500;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
`

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px; /* Adjust the size as needed */
`

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Logo src='/logo.png' alt='Logo' />
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <HomeLink to='/cursos'>Página inicial</HomeLink>
    </Container>
  )
}

export default NotFoundPage
