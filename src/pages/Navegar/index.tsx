import * as S from './style'
import { MenuNav } from '../../components/Menu'
import { CarouselCursos } from '../../components/Carousel'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'

export const Navegar = () => {
  const [cursos, setCursos] = useState([])

  const getCursos = async () => {
    await apiInstance
      .get('/course', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setCursos(response.data)
        console.log(response)
      })
  }

  useEffect(() => {
    getCursos()
  }, [])

  return (
    <>
      <MenuNav />
      <S.Container>
        <S.Banner>
          <CarouselCursos />
        </S.Banner>

        <S.Cursos>
          {cursos.map((curso: any) => (
            <Link to={`/curso-desc/${curso.id}`}>
              <S.Curso>
                <S.CursoImg src={curso.banner} />
                <S.CursoTitle>{curso.title}</S.CursoTitle>
              </S.Curso>
            </Link>
          ))}
        </S.Cursos>
      </S.Container>
    </>
  )
}
