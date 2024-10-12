import { MenuNav } from '../../components/Menu'
import * as S from './style'

export const Aula = () => {
  return (
    <>
      <MenuNav />
      <S.Container>
        <S.MainContent>
          <img src='/naka.jpg' alt='Imagem da aula' />
          <h2>Nome da aula</h2>
          <S.Profile>
            <img src='/mai.png' alt='Imagem do Professor' />
            <p>Perfil do professor</p>
          </S.Profile>
          <S.Rating>
            <input type='radio' id='star5' name='rating' value='5' />
            <label htmlFor='star5'>★</label>
            <input type='radio' id='star4' name='rating' value='4' />
            <label htmlFor='star4'>★</label>
            <input type='radio' id='star3' name='rating' value='3' />
            <label htmlFor='star3'>★</label>
            <input type='radio' id='star2' name='rating' value='2' />
            <label htmlFor='star2'>★</label>
            <input type='radio' id='star1' name='rating' value='1' />
            <label htmlFor='star1'>★</label>
          </S.Rating>
          <S.Description>
            Descrição da aula
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </S.Description>
        </S.MainContent>
        <S.Sidebar>
          <S.SidebarItem>
            <h3>Nome da aula</h3>
            <img src='/images.jpeg' alt='Imagem da aula' />
            <p>Lorem Ipsum is simply dummy text of the printing industry...</p>
          </S.SidebarItem>
          <S.SidebarItem>
            <h3>Nome da aula</h3>
            <img src='/images.jpeg' alt='Imagem da aula' />
            <p>Lorem Ipsum is simply dummy text of the printing industry...</p>
          </S.SidebarItem>
          <S.SidebarItem>
            <h3>Nome da aula</h3>
            <img src='/images.jpeg' alt='Imagem da aula' />
            <p>Lorem Ipsum is simply dummy text of the printing industry...</p>
          </S.SidebarItem>
        </S.Sidebar>
      </S.Container>
    </>
  )
}
