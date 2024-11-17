import { useEffect, useState } from 'react'
import { MenuNav } from '../../components/Menu'
import * as S from './styles'
import { apiInstance } from '../../utils/axios'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import useCourse from '../../hook/useCourse'

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

  const course = useCourse()

  const [teacherId, setTeacherId] = useState('')

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
        setTeacherId(response.data.userId)
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

  const addCourse = () => {
    course.addCourse({
      id: courseId ? courseId : '',
      name: curso.title,
      description: curso.description,
      bannerUrl: curso.banner,
      price: curso.price,
    })
  }

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
          {teacherId === Cookies.get('user') ? (
            <>
              <S.TextContainer>
                <a href={`/editar-curso/${courseId}`}>Editar curso</a>
              </S.TextContainer>
              <S.TextContainer>
                <a href={`/criar-aula/${courseId}`}>Adicionar aula</a>
              </S.TextContainer>
            </>
          ) : null}
        </S.LeftSideContainer>

        <S.RightSideContainer id='container-direita'>
          <S.div2>
            <div>
              <S.img2 src={'/PessoaBolinha.png'} alt='pessoa' />
              <h1>{teacher.name}</h1>
              <p style={{ marginTop: '100px' }}>{teacher.graduation}</p>
            </div>
          </S.div2>

          <S.BottomSideContainer id='container-bottom'>
            <S.div3>
              <div>
                <h1>
                  {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(curso.price)}
                </h1>
                {course.courses.some((c) => c.id === courseId) ? (
                  <S.button onClick={() => course.removeCourse(courseId ? courseId : '')}>
                    Remover do Carrinho
                  </S.button>
                ) : (
                  <S.button onClick={addCourse}>Adicionar ao Carrinho</S.button>
                )}
              </div>
            </S.div3>
          </S.BottomSideContainer>
        </S.RightSideContainer>
      </S.Container>
    </>
  )
}
