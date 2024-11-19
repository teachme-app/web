import { useParams } from 'react-router-dom'
import { MenuNav } from '../../components/Menu'
import { apiInstance } from '../../utils/axios'
import * as S from './style'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

export const Aula = () => {
  const { id } = useParams()

  const [aulas, setAulas] = useState<any>([])
  const [selectedLesson, setSelectedLesson] = useState('')

  const getLessons = async () => {
    apiInstance
      .get(`/lesson/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setAulas(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getLessons()
    console.log(id)
  }, [])

  return (
    <>
      <MenuNav />
      <S.Container>
        <S.MainContent>
          <iframe
            width={'100%'}
            height={'100%'}
            src={aulas.find((aula: any) => aula.id === selectedLesson)?.videoUrl}
          />
          <div style={{ marginTop: '30px' }}>
            <h2>{aulas.find((aula: any) => aula.id === selectedLesson)?.title}</h2>
            <S.Rating>
              <input type='radio' id='star5' name='rating' value='5' />
              <label htmlFor='star5'>★</label>
              <input type='radio' id='star4' name='rating' value='4' />
              <label htmlFor='star4'>★</label>
              <input type='radio' id='star3' name='rating' value='3' />
              <label htmlFor='star3'>★</label>
              <input type='radio' id='star2' name='rating' value='2' />
              <label htmlFor='star2'>★</label>
              <input type='radio' id='star1' name='rating' value='1' />
              <label htmlFor='star1'>★</label>
            </S.Rating>
            <S.Description>
              {aulas.find((aula: any) => aula.id === selectedLesson)?.description}
            </S.Description>
          </div>
        </S.MainContent>
        <S.Sidebar>
          {aulas.map((aula: any) => (
            <S.SidebarItem
              style={{ cursor: 'pointer' }}
              key={aula.id}
              onClick={() => setSelectedLesson(aula.id)}
            >
              <h3>{aula.title}</h3>
              <p>{aula.description}</p>
            </S.SidebarItem>
          ))}
        </S.Sidebar>
      </S.Container>
    </>
  )
}
