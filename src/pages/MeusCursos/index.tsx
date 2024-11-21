import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './style'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'

export const MeusCursos = () => {
  const [categoria, setCategoria] = useState('')
  const [userCursos, setUserCursos] = useState([])

  const getUserCursos = async () => {
    apiInstance
      .get('/user-courses', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setUserCursos(response.data.purchasedCourses)
      })
      .catch((error) => {
        console.error('error', error)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getUserCursos()
    }, 1000)
  }, [])

  return (
    <S.Container>
      <MenuNav />
      <Grid container sx={{ marginTop: '30px' }}>
        <Grid item xs={10}>
          <S.Title>Meus Cursos</S.Title>
        </Grid>
      </Grid>

      <S.ContainerCursos>
        {userCursos.map((curso: any) => (
          <Link key={curso.id} style={{ textDecoration: 'none' }} to={`/aula/${curso.id}`}>
            <S.Curso>
              <S.CursoImg src={curso.banner} />
              <S.ContainerText>
                <h1>{curso.title}</h1>
                <p>Descricao do curso: {curso.description}</p>
              </S.ContainerText>
            </S.Curso>
          </Link>
        ))}
      </S.ContainerCursos>
    </S.Container>
  )
}
