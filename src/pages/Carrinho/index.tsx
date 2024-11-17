import { useEffect, useState } from 'react'
import { MenuNav } from '../../components/Menu'
import useCourse from '../../hook/useCourse'
import * as S from './style'

export const Carrinho = () => {
  const course = useCourse()
  const [totalPrice, setTotalPrice] = useState(0)
  const [option, setOption] = useState('')

  useEffect(() => {
    course.courses.map((c) => {
      setTotalPrice(totalPrice + c.price)
    })
  }, [])

  return (
    <div>
      <MenuNav />
      <S.Container>
        <S.CursosContainer>
          {course.courses.map((curso) => (
            <S.SingleCourseContainer>
              <S.ImagemCursoContainer src={curso.bannerUrl} />
              <S.DescriptionContainer>
                <S.CourseTitle>{curso.name}</S.CourseTitle>
                <S.CoursePrice>R$ {curso.price}</S.CoursePrice>
              </S.DescriptionContainer>
            </S.SingleCourseContainer>
          ))}
        </S.CursosContainer>
        <S.FormContainer>
          <S.FormTitle>Dados</S.FormTitle>
          <S.Input placeholder='Nome' />
          <S.Input placeholder='Email' />
          <S.Input placeholder='CPF' />
          <S.Select
            onChange={(e) => {
              setOption(e.target.value)
            }}
          >
            <option>Boleto</option>
            <option>Cartão de crédito</option>
          </S.Select>
          <S.Input placeholder='Número do cartão' hidden={option !== 'Cartão de crédito'} />
          <S.Input placeholder='Validade' hidden={option !== 'Cartão de crédito'} />
          <S.Input placeholder='CVV' hidden={option !== 'Cartão de crédito'} />
          <S.SubmitButton>Prosseguir</S.SubmitButton>
          <S.PriceContainer>
            <S.TotalPrice>
              Total:{' '}
              {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalPrice)}
            </S.TotalPrice>
          </S.PriceContainer>
        </S.FormContainer>
      </S.Container>
    </div>
  )
}
