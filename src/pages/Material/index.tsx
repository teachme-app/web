import { MenuNav } from '../../components/Menu'
import * as S from './style'
import 'aos/dist/aos.css'

export const Materiais = () => {
  return (
    <>
      <MenuNav />
      <S.CourseContent>
        <S.CourseImage>
          <img src='/material.jpeg' alt='Imagem Material' />
        </S.CourseImage>
        <S.CourseInfo>
          <h1>Matemática Básica</h1>
          <p>
            Este material aborda os conceitos fundamentais da Matemática Básica. Você aprenderá sobre
            operações aritméticas, frações, decimais, porcentagens e muito mais. O objetivo é fornecer uma
            base sólida para que você possa avançar para tópicos mais complexos com confiança.
          </p>
          <S.CoursePrice>
            <h2>
              Preço: <span style={{ color: '#8a8a8a' }}>R$ 49,90</span>
            </h2>
          </S.CoursePrice>
          <S.CourseButton>Comprar</S.CourseButton>
        </S.CourseInfo>
      </S.CourseContent>
    </>
  )
}
