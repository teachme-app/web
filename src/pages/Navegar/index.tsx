import * as S from './style'
import { Menu } from '../../components/Menu'
import { CarouselCursos }  from '../../components/Carousel'


export const Navegar = () => {
  return (
    <>
    <Menu />
      <S.Container>
        <S.Banner>  
          <CarouselCursos />
        </S.Banner>
        
      </S.Container>

      <S.ImgContainer>
        <S.ImgCurso>
          <S.Curso1><h1>Curso Técnico</h1></S.Curso1>
          <S.Curso2><h1>Curso Técnico</h1></S.Curso2>
          <S.Curso3><h1>Curso Técnico</h1></S.Curso3>
        </S.ImgCurso>
      </S.ImgContainer>
    </>
  );
};

