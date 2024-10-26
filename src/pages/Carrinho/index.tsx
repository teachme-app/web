import { useState } from 'react'
import { MenuNav } from '../../components/Menu'
import * as S from './style'

export const Carrinho = () => {
  const [quantity1, setQuantity1] = useState(1)
  const [quantity2, setQuantity2] = useState(1)
  const [quantity3, setQuantity3] = useState(1)
  const [quantity4, setQuantity4] = useState(1)

  const handleAddCart = (course: number) => {
    switch (course) {
      case 1:
        setQuantity1(quantity1 + 1)
        break
      case 2:
        setQuantity2(quantity2 + 1)
        break
      case 3:
        setQuantity3(quantity3 + 1)
        break
      case 4:
        setQuantity4(quantity4 + 1)
        break
      default:
        break
    }
  }

  const handleRemoveCart = (course: number) => {
    switch (course) {
      case 1:
        if (quantity1 > 1) {
          setQuantity1(quantity1 - 1)
        }
        break
      case 2:
        if (quantity2 > 1) {
          setQuantity2(quantity2 - 1)
        }
        break
      case 3:
        if (quantity3 > 1) {
          setQuantity3(quantity3 - 1)
        }
        break
      case 4:
        if (quantity4 > 1) {
          setQuantity4(quantity4 - 1)
        }
        break
      default:
        break
    }
  }

  return (
    <div>
      <MenuNav />
      <S.Container>
        <S.CursosContainer>
          <S.SingleCourseContainer>
            <S.ImagemCursoContainer src='/place-holder-image.png' />
            <S.DescriptionContainer>
              <S.CourseTitle>Curso de React</S.CourseTitle>
              <S.CoursePrice>R$ 100,00</S.CoursePrice>
              <S.QuantityContainer>
                <S.PlusIconContainer>
                  <S.PlusIcon onClick={() => handleAddCart(1)}>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>{quantity1}</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon onClick={() => handleRemoveCart(1)}>-</S.MinusIcon>
                </S.MinusIconContainer>
              </S.QuantityContainer>
            </S.DescriptionContainer>
          </S.SingleCourseContainer>
          <S.SingleCourseContainer>
            <S.ImagemCursoContainer src='/place-holder-image.png' />
            <S.DescriptionContainer>
              <S.CourseTitle>Curso de React</S.CourseTitle>
              <S.CoursePrice>R$ 100,00</S.CoursePrice>
              <S.QuantityContainer>
                <S.PlusIconContainer>
                  <S.PlusIcon onClick={() => handleAddCart(2)}>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>{quantity2}</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon onClick={() => handleRemoveCart(2)}>-</S.MinusIcon>
                </S.MinusIconContainer>
              </S.QuantityContainer>
            </S.DescriptionContainer>
          </S.SingleCourseContainer>
          <S.SingleCourseContainer>
            <S.ImagemCursoContainer src='/place-holder-image.png' />
            <S.DescriptionContainer>
              <S.CourseTitle>Curso de React</S.CourseTitle>
              <S.CoursePrice>R$ 100,00</S.CoursePrice>
              <S.QuantityContainer>
                <S.PlusIconContainer>
                  <S.PlusIcon onClick={() => handleAddCart(3)}>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>{quantity3}</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon onClick={() => handleRemoveCart(3)}>-</S.MinusIcon>
                </S.MinusIconContainer>
              </S.QuantityContainer>
            </S.DescriptionContainer>
          </S.SingleCourseContainer>
          <S.SingleCourseContainer>
            <S.ImagemCursoContainer src='/place-holder-image.png' />
            <S.DescriptionContainer>
              <S.CourseTitle>Curso de React</S.CourseTitle>
              <S.CoursePrice>R$ 100,00</S.CoursePrice>
              <S.QuantityContainer>
                <S.PlusIconContainer>
                  <S.PlusIcon onClick={() => handleAddCart(4)}>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>{quantity4}</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon onClick={() => handleRemoveCart(4)}>-</S.MinusIcon>
                </S.MinusIconContainer>
              </S.QuantityContainer>
            </S.DescriptionContainer>
          </S.SingleCourseContainer>
        </S.CursosContainer>
        <S.FormContainer>
          <S.FormTitle>Dados</S.FormTitle>
          <S.Input placeholder='Nome' />
          <S.Input placeholder='Email' />
          <S.Input placeholder='CPF' />
          <S.Select>
            <option>Boleto</option>
            <option>Cartão de crédito</option>
          </S.Select>
          <S.SubmitButton>Prosseguir</S.SubmitButton>
          <S.PriceContainer>
            <S.TotalPrice>Total: R$ 400,00</S.TotalPrice>
          </S.PriceContainer>
        </S.FormContainer>
      </S.Container>
    </div>
  )
}
