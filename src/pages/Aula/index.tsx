import { MenuNav } from '../../components/Menu'
import * as S from './style'

export const Aula = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftContainer>
          <S.VideoContainer>
            <S.Video src='https://www.youtube.com/embed/7e90gBu4pas' />
          </S.VideoContainer>
          <S.DescContainer>
            <S.Rating>
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
            </S.Rating>
            <div style={{ marginTop: '35px', alignSelf: 'start' }}>
              <S.Conclusion>Concluir</S.Conclusion>
              <S.ConcluirIcone />
            </div>
          </S.DescContainer>
          <S.DescTextContainer>
            <S.VideoTitle>Titulo do Curso</S.VideoTitle>
            <S.VideoDescription>Descrição do Curso</S.VideoDescription>
          </S.DescTextContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.RightTitle>Lista de Conteudo</S.RightTitle>
          <S.Aula>
            <S.NumberAula>1</S.NumberAula>
            <S.BannerAula src='/curso1.png' />
            <S.TituloAula>Aula 1</S.TituloAula>
            <S.ConcluirIcone />
          </S.Aula>
        </S.RightContainer>
      </S.Container>
    </>
  )
}
