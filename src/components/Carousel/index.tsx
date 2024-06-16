import Carousel from 'react-bootstrap/Carousel'
import * as S from './style'

export const CarouselCursos = () => {
  return (
    <S.CarouselCursos>
      <Carousel.Item interval={1000}>
        <img src='/imagem.jpg' width={'100%'} height={'372px'} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='/imagem2.jpg' width={'100%'} height={'372px'}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/imagem.jpg' width={'100%'} height={'372px'} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </S.CarouselCursos>
  )
}
