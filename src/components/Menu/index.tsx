import { useState } from 'react'
import * as S from './style'
import { IconButton, Grid, Hidden, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const toggleOpen = (open: boolean) => {
    setOpen(open)
  }

  return (
    <S.Container container alignContent={'center'} gap={'10px'}>
      <Grid item xl={2} md={2} sm={4}>
        <S.LogoItem src='/logoSVG.svg' width='95%' height='44px' />
      </Grid>
      <Grid item xl={4} md={4} sm={6}>
        <S.Input type='text' id='txtBusca' placeholder='pesquise aulas incríveis aqui...' />
      </Grid>
      <Hidden mdDown>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/'>início</S.ItemLink>
        </S.MenuItem>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/'>baixados</S.ItemLink>
        </S.MenuItem>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/'>material</S.ItemLink>
        </S.MenuItem>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/meus-cursos'>cursos</S.ItemLink>
        </S.MenuItem>
        <Grid item xl={0.5} md={0.4}>
          <Link to={'/carrinho'}>
            <div style={{ height: '55px', width: '55px', marginTop: '5px', marginLeft: '10px' }}>
              <img src='/carrinho.png' width='40px' height='40px' />
            </div>
          </Link>
        </Grid>
        <Grid item xl={0.5} md={0.2}>
          <Link to={'/'}>
            <div
              style={{
                height: '55px',
                width: '55px',
                backgroundColor: '#FDF9F3',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src='/pessoa.png' width='32px' height='41.1px' id='pessoa2' />
            </div>
          </Link>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item md={2} alignSelf={'center'} fontSize={'large'}>
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='top'
            open={open}
            onClose={() => {
              toggleOpen(false)
            }}
          >
            <List>
              {['Inicio', 'Baixados', 'Material', 'Cursos', 'Carrinho', 'Perfil'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Grid>
      </Hidden>
    </S.Container>
  )
}
