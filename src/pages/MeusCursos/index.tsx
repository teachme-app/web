import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { Menu } from '../../components/Menu'
import * as S from './style'

export const MeusCursos = () => {
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
            <Select label='Categorias'>
              <MenuItem>Ten</MenuItem>
              <MenuItem>Twenty</MenuItem>
              <MenuItem>Thirty</MenuItem>
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
