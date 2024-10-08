import { Box } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

export const Title = styled.h1`
  margin-left: 40px;
`

export const FormControlStyle = styled.div`
  width: 80%;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const Submit = styled.button`
  width: 20vh;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: white;
  border: 3px solid #ff9740;
  font-weight: bold;
  color: #ff9740;
  border-radius: 50px;
  cursor: pointer;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProfileImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`

export const ChangePhoto = styled.p`
  color: #ff9740;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormControlStyleButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BoxModal = styled(Box)`
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 400;
  border: '2px solid #000';
  background-color: 'white';
  box-shadow: 24;
`
