import { MenuNav } from '../../components/Menu'
import * as S from './styles'

export const DescCursos = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftSideContainer>
          <div>
            <S.img src='/place-holder-image.png' alt='place holder'  />
          </div>
          <S.TitleContainer>
            <h1>Título do curso</h1>
            <p></p>
          </S.TitleContainer>
          <S.TextContainer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis ullamcorper elementum.
              Donec molestie lacinia purus, ac dapibus velit sollicitudin maximus. Donec at vulputate felis.
              Etiam egestas luctus ante, eget pulvinar felis. Etiam ut maximus metus. Maecenas sit amet erat
              libero. Aliquam erat volutpat. Nulla vulputate cursus nulla eget sollicitudin. Suspendisse
              potenti. Nam blandit eleifend gravida. Maecenas eget semper dui. Ut in justo porttitor,
              pellentesque lacus et, gravida risus.
            </p>
          </S.TextContainer>
          <S.HeartButton>
            <img src='/coracao.svg' alt='coracao' width='82' height='81' />
          </S.HeartButton>
        </S.LeftSideContainer>

        <S.RightSideContainer id='container-direita'>
          <S.div2>
            <div>
              <S.img2 src='/PessoaBolinha.png' alt='pessoa'  />
              <h1>Perfil do professor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis ullamcorper elementum.
                Donec molestie lacinia purus, ac dapibus velit sollicitudin maximus. Donec at vulputate felis.
                Etiam egestas luctus ante, eget pulvinar felis. Etiam ut maximus metus. Maecenas sit amet erat
                libero.{' '}
              </p>
            </div>
          </S.div2>
          </S.RightSideContainer>
          <S.BottomSideContainer id='container-bottom'>
            <S.div3>
              <div>
                <h1>R$XXXXXXX,XXXXXX</h1>
                <S.button> Adicionar ao Carrinho </S.button>
              </div>
            </S.div3>
          </S.BottomSideContainer>
        
      </S.Container>
    </>
  )
}
