import { Container, Content, Text } from "./styles"
import { Link, useNavigate} from "react-router-dom"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { FaStar, FaRegStar } from "react-icons/fa"
import { IoTimeOutline } from "react-icons/io5"
import { GoArrowLeft } from "react-icons/go"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from '../../services/api'




export function Details() {
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
              <ButtonText title="Voltar" />
            </Link>

            <h1>
              {data.title}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </h1>

            <div>
              <img
                src="https://github.com/natalyecavalieri.png"
                alt="Imagem do usuário"
              />
              <p>Por Natalye Cavalieri</p>
              <IoTimeOutline />
              <span>31/12/2023 às 09:30</span>
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
