import { TextField } from '@mui/material'
import * as S from './style'
import { MenuNav } from '../../components/Menu'

export const CriarCurso = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.ProfileImg src='/curso1.png' />
          <S.ChangePhoto>Trocar banner</S.ChangePhoto>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Criar Curso</S.Title>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Titulo' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Descricao' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Preco' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyleButton>
            <S.Submit>Salvar</S.Submit>
          </S.FormControlStyleButton>
        </S.RightContainer>
      </S.Container>
    </>
  )
}
