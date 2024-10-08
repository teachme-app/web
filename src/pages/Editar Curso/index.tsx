import { Button, TextField } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'

export const EditarCurso = () => {
  return (
    <S.Container>
      <MenuNav />
      <S.ContainerForm>
        <S.Title>Editar Curso</S.Title>
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
          <Button sx={{ width: '100%', backgroundColor: '#ffbb7b', color: 'white' }}>Editar Curso</Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  )
}
