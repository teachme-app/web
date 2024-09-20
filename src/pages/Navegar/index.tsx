import * as S from './style'
import { MenuNav } from '../../components/Menu'
import { CarouselCursos } from '../../components/Carousel'
import { Link } from 'react-router-dom'

export const Navegar = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.Banner>
          <CarouselCursos />
        </S.Banner>
        <S.Cursos>
          <Link to='/curso-desc'>
            <S.Curso>
              <S.CursoImg src='/curso1.png' />
              <S.CursoTitle>Curso Técnico</S.CursoTitle>
            </S.Curso>
          </Link>
          <Link to='/curso-desc'>
            <S.Curso>
              <S.CursoImg src='/curso1.png' />
              <S.CursoTitle>Curso Técnico</S.CursoTitle>
            </S.Curso>
          </Link>
          <Link to='/curso-desc'>
            <S.Curso>
              <S.CursoImg src='/curso1.png' />
              <S.CursoTitle>Curso Técnico</S.CursoTitle>
            </S.Curso>
          </Link>
        </S.Cursos>
      </S.Container>
    </>
  )
}
