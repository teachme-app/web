import { TextField } from '@mui/material'
import * as S from './style'
import { MenuNav } from '../../components/Menu'

export const EditarCurso = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.ProfileImg src='/curso1.png' />
          <S.ChangePhoto>Trocar banner</S.ChangePhoto>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Editar Curso</S.Title>
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
            <S.Submit style={{ color: 'red', border: '3px solid red' }}>Deletar Curso</S.Submit>
          </S.FormControlStyleButton>
        </S.RightContainer>
      </S.Container>
    </>
  )
}
