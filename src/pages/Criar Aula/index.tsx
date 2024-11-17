import { Button, TextField } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'
import { useState } from 'react'
import { apiInstance } from '../../utils/axios'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

export const CriarAula = () => {
  const { id } = useParams()

  const [aula, setAula] = useState({
    title: '',
    description: '',
    videoUrl: '',
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleCreateLesson = async () => {
    await apiInstance
      .post(
        `/lesson`,
        { ...aula, courseId: id },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      )
      .then(() => {
        setMessage('Aula criada com sucesso!')
        setAula({
          title: '',
          description: '',
          videoUrl: '',
        })
      })
      .catch(() => {
        setMessage('Erro ao criar aula')
        setError(true)
      })
  }

  return (
    <S.Container>
      <MenuNav />
      <S.ContainerForm>
        <S.Title>Criar Aula</S.Title>
        {message && <p style={{ color: error ? 'red' : 'green' }}>{message}</p>}
        <S.Form>
          <TextField
            value={aula.title}
            onChange={(e) => setAula({ ...aula, title: e.target.value })}
            label='Titulo da Aula'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={aula.description}
            onChange={(e) => setAula({ ...aula, description: e.target.value })}
            label='Descrição da Aula'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={aula.videoUrl}
            onChange={(e) => setAula({ ...aula, videoUrl: e.target.value })}
            label='Link da aula'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <Button
            onClick={handleCreateLesson}
            sx={{ width: '100%', backgroundColor: '#FF9740', color: 'white' }}
          >
            Criar Aula
          </Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  )
}
