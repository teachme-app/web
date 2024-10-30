import { useState } from 'react'
import * as S from './style'
import {
  IconButton,
  Grid,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  MenuItem,
  Divider,
  ListItemIcon,
  Menu,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import { Chat, Logout, PlusOne, Settings } from '@mui/icons-material'
import { useAuth } from '../../utils/auth'
import Cookies from 'js-cookie'

export const MenuNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpen = () => setOpenMenu(!open)

  const toggleOpen = (open: boolean) => {
    setOpenMenu(open)
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    setAnchorEl(null)
    navigate('/login')
  }

  const listMenu = [
    {
      tab: 'Início',
      link: '/cursos',
    },
    {
      tab: 'Baixados',
      link: '/downloads',
    },
    {
      tab: 'Material',
      link: '/materiais',
    },
    {
      tab: 'Cursos',
      link: '/meus-cursos',
    },
    {
      tab: 'Carrinho',
      link: '/carrinho',
    },
    {
      tab: 'Perfil',
      link: '/perfil',
    },
  ]

  return (
    <S.Container container alignContent={'center'} gap={'10px'}>
      <Grid item xl={2} md={2} sm={4}>
        <Link to={'/cursos'}>
          <S.LogoItem src='/logoSVG.svg' width='95%' height='44px' />
        </Link>
      </Grid>
      <Grid item xl={4} md={4} sm={6}>
        <S.Input type='text' id='txtBusca' placeholder='pesquise aulas incríveis aqui...' />
      </Grid>
      <Hidden mdDown>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/cursos'>início</S.ItemLink>
        </S.MenuItem>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/downloads'>baixados</S.ItemLink>
        </S.MenuItem>
        <S.MenuItem item xl={1.1} md={1.1}>
          <S.ItemLink to='/materiais'>material</S.ItemLink>
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
          <IconButton
            onClick={handleClick}
            size='large'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
                to={'/perfil'}
              >
                <Avatar /> <div style={{ marginTop: '5px' }}>Profile</div>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
                to={'/perfil'}
              >
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Settings
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
                to={'/chat'}
              >
                <ListItemIcon>
                  <Chat fontSize='small' />
                </ListItemIcon>
                Chat
              </Link>
            </MenuItem>
            {Cookies.get('role') === 'TEACHER' ? (
              <MenuItem>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    marginTop: '5px',
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                  to={'/criar-curso'}
                >
                  <ListItemIcon>
                    <PlusOne fontSize='small' />
                  </ListItemIcon>
                  Adicionar curso
                </Link>
              </MenuItem>
            ) : null}

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item md={2} alignSelf={'center'} fontSize={'large'}>
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='top'
            open={openMenu}
            onClose={() => {
              toggleOpen(false)
            }}
          >
            <List>
              {listMenu.map(({ tab, link }) => (
                <Link to={link} style={{ textDecoration: 'none' }}>
                  <ListItem key={tab} disablePadding>
                    <ListItemButton>
                      <S.MenuMobileLink primary={tab} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Grid>
      </Hidden>
    </S.Container>
  )
}
