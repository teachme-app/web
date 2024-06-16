import * as S from './style'
import { Menu } from '../../components/Menu'
import { CarouselCursos } from '../../components/Carousel'

export const Navegar = () => {
  return (
    <>
      <Menu />
      <S.Container>
        <S.Banner>
          <CarouselCursos />
        </S.Banner>
        <S.Cursos>
          <S.Curso>
            <S.CursoImg src='/curso1.png' />
            <S.CursoTitle>Curso Técnico</S.CursoTitle>
          </S.Curso>
          <S.Curso>
            <S.CursoImg src='/curso1.png' />
            <S.CursoTitle>Curso Técnico</S.CursoTitle>
          </S.Curso>
          <S.Curso>
            <S.CursoImg src='/curso1.png' />
            <S.CursoTitle>Curso Técnico</S.CursoTitle>
          </S.Curso>
        </S.Cursos>
      </S.Container>
    </>
  )
}
