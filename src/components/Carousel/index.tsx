import Carousel from 'react-bootstrap/Carousel'
import * as S from './style'

export const CarouselCursos = () => {
  return (
    <S.CarouselCursos>
      <Carousel.Item interval={1000}>
        <img src='/banner_mat.png' width={'100%'} height={'372px'} />
        <Carousel.Caption>
          <h3>Curso de matemática</h3>
          <p>Aprenda agora matemática do básico ao avançado!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='/banner_bio.png' width={'100%'} height={'372px'} />
        <Carousel.Caption>
          <h3>Curso de biologia</h3>
          <p>Explore os mistérios da vida e da natureza com nosso curso de biologia!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner_fis.png' width={'100%'} height={'372px'} />
        <Carousel.Caption>
          <h3>Curso de física</h3>
          <p>Domine os conceitos fundamentais da física e suas aplicações práticas!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </S.CarouselCursos>
  )
}
