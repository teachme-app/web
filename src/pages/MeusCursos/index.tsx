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

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string)
  }

  const getUserCursos = async () => {
    apiInstance
      .get('/user-courses', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setUserCursos(response.data.Course)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getUserCursos()
  }, [])

  return (
    <S.Container>
      <MenuNav />
      <Grid container sx={{ marginTop: '30px' }}>
        <Grid item xs={10}>
          <S.Title>Meus Cursos</S.Title>
        </Grid>
        <Grid item xs={2}>
          <S.FormControlStyle>
            <InputLabel id='demo-simple-select-label'>Categorias</InputLabel>
            <Select value={categoria} label='Categorias' onChange={handleChange}>
              <MenuItem value={10}>TI</MenuItem>
              <MenuItem value={20}>GERAL</MenuItem>
              <MenuItem value={30}>ELETRÔNICA</MenuItem>
            </Select>
          </S.FormControlStyle>
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
