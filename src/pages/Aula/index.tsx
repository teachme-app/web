import { MenuNav } from '../../components/Menu'
import * as S from './style'

export const Aula = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.VideoContainer>
            <S.VideoPlayer src='https://www.youtube.com/embed/7e90gBu4pas' />
          </S.VideoContainer>
          <S.VideoInfo>
            <S.LeftInfo>
              <S.CursoDesc>curso - nome do curso</S.CursoDesc>
            </S.LeftInfo>
            <S.RightInfo>
              <S.CursoDesc>
                Concluir
                <S.CheckIconAula style={{ marginLeft: '10px', marginBottom: '3px' }} />
              </S.CursoDesc>
              <S.Rating>
                <S.StarIcon />
                <S.StarIcon />
                <S.StarIcon />
                <S.StarIcon />
                <S.StarIcon />
              </S.Rating>
            </S.RightInfo>
          </S.VideoInfo>
          <S.VideoDesc>
            <S.VideoTitle>Aula 1</S.VideoTitle>
            <S.VideoDesc>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{' '}
            </S.VideoDesc>
          </S.VideoDesc>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Lista de Conteudo</S.Title>
          <S.AulasContainer>
            <S.Aula>
              <S.AulaBanner src='/curso1.png' />
              <S.AulaTitle>aula - nome da aula</S.AulaTitle>
              <S.CheckAula>
                <S.CheckIconAula />
              </S.CheckAula>
            </S.Aula>
          </S.AulasContainer>
        </S.RightContainer>
      </S.Container>
    </>
  )
}
