import { StarBorderOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import CheckIcon from '@mui/icons-material/Check'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const VideoContainer = styled.div`
  width: 95%;
  height: 60vh;
  margin-top: 20px;
`

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 50%;
`

export const StarIcon = styled(StarBorderOutlined)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
`

export const Conclusion = styled.a`
  width: 50%;
  padding: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 20px;
`

export const VideoTitle = styled.h1`
  margin-top: 20px;
`

export const VideoDescription = styled.p`
  margin-top: 20px;
`

export const RightTitle = styled.h1`
  margin-top: 20px;
`

export const Aula = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const NumberAula = styled.h1`
  margin-right: 20px;
`

export const BannerAula = styled.img`
  width: 100px;
  height: 100px;
`

export const TituloAula = styled.h1`
  margin-right: 20px;
`

export const ConcluirIcone = styled(CheckIcon)`
  width: 50px;
  height: 50px;
  background-color: #ff9740;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`

export const DescContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`

export const DescTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`
