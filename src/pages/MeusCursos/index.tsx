import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Menu } from '../../components/Menu'
import * as S from './style'
import { useState } from 'react'

export const MeusCursos = () => {
  const [categoria, setCategoria] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string)
  }

  return (
    <S.Container>
      <Menu />
      <Grid container sx={{ marginTop: '30px' }}>
        <Grid item xs={10}>
          <S.Title>Meus Cursos</S.Title>
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
            <h1>Titulo do Curso</h1>
            <p>
              Descricao do curso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam
              earum, maxime optio culpa laboriosam nulla impedit. Mollitia dolorum, nisi ipsam commodi iure
              natus beatae sed, facere ratione itaque consequuntur.
            </p>
          </S.ContainerText>
        </S.Curso>
        <S.Curso>
          <S.CursoImg src='/curso1.png' />
          <S.ContainerText>
            <h1>Titulo do Curso</h1>
            <p>
              Descricao do curso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam
              earum, maxime optio culpa laboriosam nulla impedit. Mollitia dolorum, nisi ipsam commodi iure
              natus beatae sed, facere ratione itaque consequuntur.
            </p>
          </S.ContainerText>
        </S.Curso>
        <S.Curso>
          <S.CursoImg src='/curso1.png' />
          <S.ContainerText>
            <h1>Titulo do Curso</h1>
            <p>
              Descricao do curso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam
              earum, maxime optio culpa laboriosam nulla impedit. Mollitia dolorum, nisi ipsam commodi iure
              natus beatae sed, facere ratione itaque consequuntur.
            </p>
          </S.ContainerText>
        </S.Curso>
      </S.ContainerCursos>
    </S.Container>
  )
}
