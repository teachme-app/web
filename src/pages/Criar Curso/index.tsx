import { Button, TextField } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'

export const CriarCurso = () => {
  return (
    <S.Container>
      <MenuNav />
      <S.ContainerForm>
        <S.Title>Criar Curso</S.Title>
        <S.Form>
          <TextField label='Titulo do Curso' variant='outlined' fullWidth sx={{ marginBottom: '20px' }} />
          <TextField
            label='Descrição do Curso'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '20px' }}
          />
          <TextField label='Valor do Curso' variant='outlined' fullWidth sx={{ marginBottom: '20px' }} />
          <TextField label='Carga Horária' variant='outlined' fullWidth sx={{ marginBottom: '20px' }} />
          <TextField label='Link da Imagem' variant='outlined' fullWidth sx={{ marginBottom: '20px' }} />
          <Button sx={{ width: '100%', backgroundColor: '#FF9740', color: 'white' }}>Criar Curso</Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  )
}
