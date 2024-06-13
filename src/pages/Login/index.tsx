import { Facebook, Google, LinkedIn } from '@mui/icons-material'
import * as S from './style'
import axios from 'axios'

export const Login = () => {
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
            <a href='#'>Cadastro</a>
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
            <p>Ou continue usando seu e-mail</p>
            <input type='text' placeholder='E-mail' />
            <input type='password' placeholder='Senha' />
            <input type='submit' value='LOGAR' />
          </S.Formulario>
        </S.RightSideContainer>
      </S.Container>
    </>
  )
}
