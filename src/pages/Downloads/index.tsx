import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MenuNav } from '../../components/Menu'
import * as S from './style'
import { useState } from 'react'

export const Downloads = () => {
  const [categoria, setCategoria] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string)
  }

  return (
    <S.Container>
      <MenuNav />
      <Grid container sx={{ marginTop: '30px' }}>
        <Grid item xs={10}>
          <S.Title>Meus Downloads</S.Title>
        </Grid>
        <Grid item xs={2}>
          <S.FormControlStyle>
            <InputLabel id='demo-simple-select-label'>Categorias</InputLabel>
            <Select value={categoria} label='Categorias' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </S.FormControlStyle>
        </Grid>
      </Grid>

      <S.ContainerCursos>
        <S.Curso>
          <S.CursoImg src='/curso1.png' />
          <S.ContainerText>
            <h1>Curso de programação</h1>
          </S.ContainerText>
        </S.Curso>
        <S.Curso>
          <S.CursoImg src='/curso_eletronica.png' />
          <S.ContainerText>
            <h1>Curso de eletrônica</h1>
          </S.ContainerText>
        </S.Curso>
        <S.Curso>
          <S.CursoImg src='/curso_micro.jpg' />
          <S.ContainerText>
            <h1>Curso de microserviços</h1>
          </S.ContainerText>
        </S.Curso>
        <S.Curso>
          <S.CursoImg src='/curso_reparos.png' />
          <S.ContainerText>
            <h1>Curso de Reparos</h1>
          </S.ContainerText>
        </S.Curso>
      </S.ContainerCursos>
    </S.Container>
  )
}
