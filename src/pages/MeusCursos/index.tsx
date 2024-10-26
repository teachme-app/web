import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './style'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const MeusCursos = () => {
  const [categoria, setCategoria] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string)
  }

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
        <Link style={{ textDecoration: 'none' }} to='/curso-desc'>
          <S.Curso>
            <S.CursoImg src='/curso1.png' />
            <S.ContainerText>
              <h1>Curso de Programação</h1>
              <p>
                Descricao do curso: Este curso de programação abrange os fundamentos da codificação, incluindo
                linguagens populares como JavaScript, Python e muito mais. Ideal para iniciantes e aqueles que
                desejam aprimorar suas habilidades.
              </p>
            </S.ContainerText>
          </S.Curso>
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/curso-desc'>
          <S.Curso>
            <S.CursoImg src='/curso_eletronica.png' />
            <S.ContainerText>
              <h1>Curso de eletrônica</h1>
              <p>
                Descricao do curso: Este curso de eletrônica cobre os princípios básicos e avançados da
                eletrônica, incluindo circuitos, componentes e técnicas de montagem. Ideal para quem deseja
                iniciar ou aprofundar seus conhecimentos na área.
              </p>
            </S.ContainerText>
          </S.Curso>
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/curso-desc'>
          <S.Curso>
            <S.CursoImg src='/curso_reparos.png' />
            <S.ContainerText>
              <h1>Curso de reparos gerais</h1>
              <p>
                Descricao do curso: Este curso de reparos gerais abrange técnicas e habilidades necessárias
                para realizar reparos em casa, incluindo encanamento, eletricidade, carpintaria e muito mais.
                Ideal para quem deseja aprender a manter e consertar sua própria casa.
              </p>
            </S.ContainerText>
          </S.Curso>
        </Link>
      </S.ContainerCursos>
    </S.Container>
  )
}
