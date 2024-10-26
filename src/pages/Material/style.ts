import styled from 'styled-components'

export const CourseContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  justify-content: center;
`

export const CourseImage = styled.div`
  width: 700px;
  height: 400px;
  background-color: lightgray;
`

export const CourseInfo = styled.div`
  max-width: 600px;
  margin-left: 65px;
  h1 {
    color: #f7941d;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`

export const CoursePrice = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  h2 {
    color: #f7941d;
  }
`

export const CourseButton = styled.button`
  background-color: #f7941d;
  width: 100%;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`
