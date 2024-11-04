import { Button, TextField } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'

export const EditarCurso = () => {
  const { courseId } = useParams()

  const [curso, setCurso] = useState({
    title: '',
    description: '',
    price: 0,
    hours: '',
    banner: '',
  })
  const [message, setMesssage] = useState('')

  const getCurso = async () => {
    await apiInstance
      .get(`/course/?id=${courseId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setCurso(response.data)
        console.log(curso)
      })
  }

  const handleEditCourse = async () => {
    await apiInstance
      .patch(
        '/course',
        { ...curso, courseId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      )
      .then((response) => {
        if (response.data.message === 'Course updated successfully') {
          setMesssage('Curso editado com sucesso!')
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

  const mountPage = async () => {
    await getCurso()
  }

  useEffect(() => {
    mountPage()
  }, [])

  return (
    <S.Container>
      <MenuNav />
      <S.ContainerForm>
        <S.Title>Editar Curso</S.Title>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <S.Form>
          <TextField
            label='Titulo do Curso'
            value={curso.title}
            onChange={(e) => setCurso({ ...curso, title: e.target.value })}
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label='Descrição do Curso'
            value={curso.description}
            onChange={(e) => setCurso({ ...curso, description: e.target.value })}
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label='Valor do Curso'
            value={curso.price}
            onChange={(e) => setCurso({ ...curso, price: Number(e.target.value) })}
            variant='outlined'
            type='number'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label='Link da Imagem'
            value={curso.banner}
            onChange={(e) => setCurso({ ...curso, banner: e.target.value })}
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <Button
            onClick={handleEditCourse}
            sx={{ width: '100%', backgroundColor: '#ffbb7b', color: 'white' }}
          >
            Editar Curso
          </Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  )
}
