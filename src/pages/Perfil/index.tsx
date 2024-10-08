import { Box, Modal, TextField, Typography } from '@mui/material'
import * as S from './style'
import { MenuNav } from '../../components/Menu'
import { useState } from 'react'

export const Perfil = () => {
  const [open, setOpen] = useState(false)
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

  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.ProfileImg src='/pessoa.png' />
          <S.ChangePhoto>Alterar Foto</S.ChangePhoto>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Perfil</S.Title>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Nome' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Email' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Documento' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Data de Nascimento' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Telefone' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyle>
            <TextField id='outlined-basic' label='Endereco' variant='outlined' fullWidth />
          </S.FormControlStyle>
          <S.FormControlStyleButton>
            <S.Submit>Salvar</S.Submit>
            <S.Submit style={{ color: 'red', border: '3px solid red' }}>Trocar Senha</S.Submit>
            <S.Submit onClick={handleClick} style={{ color: 'green', border: '3px solid green' }}>
              Tornar-se professor
            </S.Submit>
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
            <S.FormControlStyleButton style={{ marginTop: '20px' }}>
              <S.Submit onClick={handleClose} style={{ color: 'red', border: '3px solid red' }}>
                Sair
              </S.Submit>
              <S.Submit style={{ color: 'green', border: '3px solid green' }}>Tornar-se professor</S.Submit>
            </S.FormControlStyleButton>
          </Box>
        </Modal>
      </S.Container>
    </>
  )
}
