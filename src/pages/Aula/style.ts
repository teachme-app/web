import { StarBorderOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import CheckIcon from '@mui/icons-material/Check'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 20px;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

export const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const VideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const CursoDesc = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const RightInfo = styled.div`
  display: flex;
  flex-direction: row;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  margin-left: 20px;
`

export const StarIcon = styled(StarBorderOutlined)`
  color: #f1c40f;
`

export const VideoDesc = styled.div`
  margin-top: 20px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const Aula = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #eaeaea;
  padding: 20px;
`

export const AulaBanner = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`

export const AulaTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
`

export const CheckAula = styled.div`
  margin-left: auto;
`

export const RightContainer = styled.div`
  width: 30%;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const AulasContainer = styled.div`
  margin-top: 20px;
`

export const CheckIconAula = styled(CheckIcon)`
  color: white;
  background-color: #6df1fe;
  border-radius: 50%;
  cursor: pointer;
`
