import { useEffect, useState } from 'react'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'

export const DescCursos = () => {
  const { courseId } = useParams()

  const [curso, setCurso] = useState({
    title: '',
    description: '',
    price: 0,
    hours: '',
    banner: '',
    userId: '',
  })

  const [teacher, setTeacher] = useState({
    name: '',
    email: '',
    document: '',
    birthDate: '',
    phone: '',
    address: '',
    role: '',
    pfp: '',
    graduation: '',
  })

  const getCurso = async () => {
    await apiInstance
      .get(`/course/?id=${courseId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setCurso(response.data)
        getTeacherCurso(response.data.userId)
        console.log(curso)
      })
  }

  const getTeacherCurso = async (teacherId: string) => {
    await apiInstance
      .get(`/user/${teacherId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((response) => {
        setTeacher(response.data)
        console.log(teacher)
      })
  }

  useEffect(() => {
    getCurso()
    console.log(courseId)
  }, [])

  return (
    <>
      <MenuNav />
      <S.Container>
        <S.LeftSideContainer>
          <S.ImageContainer>
            <div>
              <S.img height={'550px'} src={curso.banner} alt='place holder' />
            </div>
          </S.ImageContainer>

          <S.TitleContainer>
            <h1>{curso.title}</h1>
          </S.TitleContainer>

          <S.TextContainer>
            <p>{curso.description}</p>
          </S.TextContainer>
        </S.LeftSideContainer>

        <S.RightSideContainer id='container-direita'>
          <S.div2>
            <div>
              <S.img2 src={'/PessoaBolinha.png'} alt='pessoa' />
              <h1>{teacher.name}</h1>
              <p>{teacher.graduation}</p>
            </div>
          </S.div2>

          <S.BottomSideContainer id='container-bottom'>
            <S.div3>
              <div>
                <h1>
                  {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(curso.price)}
                </h1>
                <S.button> Adicionar ao Carrinho </S.button>
              </div>
            </S.div3>
          </S.BottomSideContainer>
        </S.RightSideContainer>
      </S.Container>
    </>
  )
}
