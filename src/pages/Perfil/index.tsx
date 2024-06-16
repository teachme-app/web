import { TextField } from '@mui/material'
import * as S from './style'
import { MenuNav } from '../../components/Menu'

export const Perfil = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.ProfileImg src='/pessoa.png' />
          <S.ChangePhoto>Alterar Foto</S.ChangePhoto>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Perfil</S.Title>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Nome' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Email' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Documento' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Data de Nascimento' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Telefone' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Endereco' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyleButton>
            <S.Submit>Salvar</S.Submit>
            <S.Submit style={{ color: 'red', border: '3px solid red' }}>Trocar Senha</S.Submit>
          </S.FormControlStyleButton>
        </S.RightContainer>
      </S.Container>
    </>
  )
}
