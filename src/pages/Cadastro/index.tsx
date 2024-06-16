import { Facebook, Google, LinkedIn } from '@mui/icons-material'
import * as S from './style'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Cadastro = () => {
  const document = '99999999999'
  const phone = '11999999999'
  const birth_date = '11-10-2006'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const user = {
    name: name,
    email: email,
    password: password,
    document: document,
    phone: phone,
    birth_date: birth_date,
  }

  const handleCreateUser = async () => {
    console.log(user)
    await axios
      .post('http://localhost:3000/api/v1/user', user)
      .then((response) => {
        console.log(response)
        setMessage('Usuário criado com sucesso!')
        setError(false)
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data[0].code === 'too_small') {
          setMessage('A senha precisa ter pelo menos 8 caracteres')
          setError(true)
        }

        if (error.response.data[0].code === 'invalid_string') {
          setMessage('Email inválido')
          setError(true)
        }
      })
  }

  return (
    <>
      <S.Container>
        <S.LeftSideContainer>
          <div>
            <S.Logo src='/logoSVG.svg' alt='logoSVG' width='200' />
          </div>
          <S.TextContainer>
            <h1>Bem-Vindo!</h1>
            <p>Não é inscrito? Conheça o Teach.Me!</p>
            <Link to={'/login'}>
              <S.LeftButton>Login</S.LeftButton>
            </Link>
          </S.TextContainer>
          <S.Wave src='/wave.svg' alt='' id='wave' />
        </S.LeftSideContainer>
        <S.RightSideContainer id='container-direita'>
          <S.Formulario>
            <h1>Crie sua conta</h1>
            <div>
              <S.MenuButton>
                <Facebook />
              </S.MenuButton>
              <S.MenuButton>
                <Google />
              </S.MenuButton>
              <S.MenuButton>
                <LinkedIn />
              </S.MenuButton>
            </div>
            {error ? <p style={{ color: 'red' }}>{message}</p> : <p style={{ color: 'green' }}>{message}</p>}
            <p>Ou continue usando seu e-mail</p>
            <input type='text' placeholder='Nome' onChange={(event) => setName(event.target.value)} />
            <input type='text' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
            <input
              type='password'
              placeholder='Senha'
              onChange={(event) => setPassword(event.target.value)}
            />
            <S.RegisterButton onClick={() => handleCreateUser()}>CADASTRAR</S.RegisterButton>
          </S.Formulario>
        </S.RightSideContainer>
      </S.Container>
    </>
  )
}
