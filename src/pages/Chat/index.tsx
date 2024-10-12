import { MenuNav } from '../../components/Menu'
import * as S from './styles'

export const Chat = () => {
  return (
    <>
      <MenuNav />
      <S.ChatContainer>
        <S.Sidebar>
          <h2>Conversas</h2>
          <S.Profile active>
            <S.ProfileImg>
              <img src='/taiyo.jpg' />
            </S.ProfileImg>
            <S.Info>
              <S.Name>Perfil</S.Name>
              <S.LastMessage>Última mensagem</S.LastMessage>
            </S.Info>
            <S.Time>00:00</S.Time>
          </S.Profile>

          <S.Profile>
            <S.ProfileImg>
              <img src='/taiyo.jpg' />
            </S.ProfileImg>
            <S.Info>
              <S.Name>Perfil</S.Name>
              <S.LastMessage>Última mensagem</S.LastMessage>
            </S.Info>
            <S.Time>00:00</S.Time>
          </S.Profile>

          <S.Profile>
            <S.ProfileImg>
              <img src='/taiyo.jpg' />
            </S.ProfileImg>
            <S.Info>
              <S.Name>Perfil</S.Name>
              <S.LastMessage>Última mensagem</S.LastMessage>
            </S.Info>
            <S.Time>00:00</S.Time>
          </S.Profile>
        </S.Sidebar>

        <S.ChatContent>
          <S.Messages></S.Messages>
          <S.InputContainer>
            <S.InputMessage type='text' placeholder='Digite sua mensagem' />
            <S.SendButton>Enviar</S.SendButton>
          </S.InputContainer>
        </S.ChatContent>
      </S.ChatContainer>
    </>
  )
}
