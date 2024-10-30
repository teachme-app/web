import { Button, TextField } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'
import { useState } from 'react'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'

export const CriarCurso = () => {
  const [curso, setCurso] = useState({
    title: '',
    description: '',
    price: 0,
    hours: '',
    banner: '',
  })
  const [message, setMesssage] = useState('')

  const handleCreateCourse = async () => {
    await apiInstance
      .post('/course', curso, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        if (response.data.message === 'Course created successfully') {
          setMesssage('Curso criado com sucesso!')
        }
        setCurso({
          title: '',
          description: '',
          price: 0,
          hours: '',
          banner: '',
        })
      })
      .catch((response) => {
        console.log(response)
      })
  }

  return (
    <S.Container>
      <MenuNav />
      <S.ContainerForm>
        <S.Title>Criar Curso</S.Title>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <S.Form>
          <TextField
            value={curso.title}
            onChange={(e) => setCurso({ ...curso, title: e.target.value })}
            label='Titulo do Curso'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={curso.description}
            onChange={(e) => setCurso({ ...curso, description: e.target.value })}
            label='Descrição do Curso'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={curso.price}
            onChange={(e) => setCurso({ ...curso, price: Number(e.target.value) })}
            label='Valor do Curso'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={curso.hours}
            onChange={(e) => setCurso({ ...curso, hours: e.target.value })}
            label='Carga Horária'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            value={curso.banner}
            onChange={(e) => setCurso({ ...curso, banner: e.target.value })}
            label='Link da Imagem'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <Button
            onClick={handleCreateCourse}
            sx={{ width: '100%', backgroundColor: '#FF9740', color: 'white' }}
          >
            Criar Curso
          </Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  )
}
