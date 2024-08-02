import { Facebook, Google, LinkedIn } from '@mui/icons-material'
import * as S from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const user = {
    email,
    password,
  }

  const handleLogin = async () => {
    const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000))

    await axios
      .post('http://localhost:3000/api/v1/login', user)
      .then((response) => {
        Cookies.set('token', response.data.token)
        console.log(Cookies.get('token'))
        delay(1).then(() => {
          window.location.href = '/'
        })
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data[0] && error.response.data[0].code === 'too_small') {
          setMessage('A senha precisa ter pelo menos 8 caracteres')
          setError(true)
        } else if (error.response.data[0] && error.response.data[0].code === 'invalid_string') {
          setMessage('Email inválido')
          setError(true)
        } else {
          setMessage(error.response.data.error)
          setError(true)
        }
      })
  }

  return (
    <>
      <S.Container>
        <S.LeftSideContainer>
          <div>
            <S.Logo src='public/logoSVG.svg' alt='logoSVG' width='200' />
          </div>
          <S.TextContainer>
            <h1>Bem-Vindo!</h1>
            <p>Não é inscrito? Conheça o Teach.Me!</p>
            <Link to={'/cadastro'}>
              <S.LeftButton>Cadastro</S.LeftButton>
            </Link>
          </S.TextContainer>
          <S.Wave src='public/wave.svg' alt='' id='wave' />
        </S.LeftSideContainer>
        <S.RightSideContainer id='container-direita'>
          <S.Formulario>
            <h1>Login</h1>
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
            <input
              type='text'
              placeholder='E-mail'
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              value={email}
            />
            <input
              type='password'
              placeholder='Senha'
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              value={password}
            />
            <S.RegisterButton type='submit' onClick={handleLogin}>
              LOGAR
            </S.RegisterButton>
          </S.Formulario>
        </S.RightSideContainer>
      </S.Container>
    </>
  )
}
