import { Container, Content, Text } from "./styles"
import { Link, useNavigate} from "react-router-dom"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { GoArrowLeft } from "react-icons/go"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from '../../services/api'
import { renderRatingStars } from "../Home/index"
import { useAuth } from "../../hooks/auth"



export function Details() {
   const { user } = useAuth()
    const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  async function handleRemove(){
    const confirm = window.confirm("Would you really like to delete the movie?")
    if(confirm){
      await api.delete(`/movie_notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(()=> {
    async function fetchMovie(){
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  }, [])
  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <Link to="/">
              <GoArrowLeft />
              <ButtonText isActive title="Voltar" />
            </Link>

            <h1>
              {data.title}
              {renderRatingStars(data.rating)}
            </h1>

            <div>
              <img src={avatarUrl} alt="User image" />
              <span> Created by {user.name} </span>
            </div>

            {data.tags && (
              <Section>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Text>{data.description}</Text>
            <Button title="Excluir Filme" variant onClick={handleRemove} />
          </Content>
        </main>
      )}
    </Container>
  )
}
