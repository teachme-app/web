import { Menu } from '../../components/Menu'
import * as S from './style'

export const Carrinho = () => {
  return (
    <div>
      <Menu />
      <S.Container>
        <S.CursosContainer>
          <S.SingleCourseContainer>
            <S.ImagemCursoContainer src='/place-holder-image.png' />
            <S.DescriptionContainer>
              <S.CourseTitle>Curso de React</S.CourseTitle>
              <S.CoursePrice>R$ 100,00</S.CoursePrice>
              <S.QuantityContainer>
                <S.PlusIconContainer>
                  <S.PlusIcon>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>1</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon>-</S.MinusIcon>
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
                  <S.PlusIcon>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>1</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon>-</S.MinusIcon>
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
                  <S.PlusIcon>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>1</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon>-</S.MinusIcon>
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
                  <S.PlusIcon>+</S.PlusIcon>
                </S.PlusIconContainer>
                <S.Quantity>1</S.Quantity>
                <S.MinusIconContainer>
                  <S.MinusIcon>-</S.MinusIcon>
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
