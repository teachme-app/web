import { Box, Modal, TextField, Typography } from '@mui/material'
import * as S from './style'
import { MenuNav } from '../../components/Menu'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../utils/axios'
import Cookie from 'js-cookie'

export const Perfil = () => {
  const [open, setOpen] = useState(false)
  const [graduation, setGraduation] = useState('')
  const [message, setMessage] = useState('')
  const [user, setUser] = useState({
    name: '',
    email: '',
    document: '',
    birthDate: '',
    phone: '',
    address: '',
    role: '',
    pfp: '',
  })
  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  const handleSaveUser = () => {
    const token = Cookie.get('token')

    apiInstance
      .patch(
        '/user',
        {
          name: user.name,
          email: user.email,
          document: user.document,
          birth_date: user.birthDate,
          phone: user.phone,
          adress: user.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.message === 'User updated successfully') {
          setMessage('Usuario atualizado com sucesso')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleTeacher = () => {
    const token = Cookie.get('token')

    apiInstance
      .patch(
        '/create-teacher',
        {
          graduation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.message === 'Role changed to teacher successfully') {
          setMessage('Você agora é um professor!')
          Cookie.set('role', 'TEACHER')
          handleClose()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getUsuario = async () => {
    const token = Cookie.get('token')

    const response = await apiInstance.get('/user-token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setUser({
      name: response.data.name,
      email: response.data.email,
      document: response.data.document,
      birthDate: response.data.birth_date,
      phone: response.data.phone,
      address: response.data.adress,
      role: response.data.role,
      pfp: response.data.profile_image,
    })

    console.log(response.data)
  }

  useEffect(() => {
    getUsuario()
  }, [])

  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.ProfileImg src={user.pfp} />
          <S.ChangePhoto>Alterar Foto</S.ChangePhoto>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Perfil</S.Title>
          {message ? <S.Message>{message}</S.Message> : null}
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              label='Nome'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              label='Email'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              value={user.document}
              onChange={(e) => setUser({ ...user, document: e.target.value })}
              label='Documento'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              value={user.birthDate}
              onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
              label='Data de Nascimento'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              value={user.phone}
              label='Telefone'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField
              id='outlined-basic'
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              label='Endereco'
              variant='outlined'
              fullWidth
            />
          </S.FormControlStyle>
          <S.FormControlStyleButton>
            <S.Submit onClick={handleSaveUser}>Salvar</S.Submit>
            <S.Submit style={{ color: 'red', border: '3px solid red' }}>Trocar Senha</S.Submit>
            {user.role === 'USER' ? (
              <S.Submit onClick={handleClick} style={{ color: 'green', border: '3px solid green' }}>
                Tornar-se professor
              </S.Submit>
            ) : null}
          </S.FormControlStyleButton>
        </S.RightContainer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Quer mesmo se tornar um professor?
            </Typography>
            <S.FormControlStyle style={{ marginTop: '20px', marginBottom: '10px' }}>
              <TextField
                id='outlined-basic'
                value={graduation}
                onChange={(e) => setGraduation(e.target.value)}
                label='Graduação'
                variant='outlined'
                fullWidth
              />
            </S.FormControlStyle>
            <S.FormControlStyleButton style={{ marginTop: '20px' }}>
              <S.Submit onClick={handleClose} style={{ color: 'red', border: '3px solid red' }}>
                Sair
              </S.Submit>
              <S.Submit onClick={handleTeacher} style={{ color: 'green', border: '3px solid green' }}>
                Tornar-se professor
              </S.Submit>
            </S.FormControlStyleButton>
          </Box>
        </Modal>
      </S.Container>
    </>
  )
}
