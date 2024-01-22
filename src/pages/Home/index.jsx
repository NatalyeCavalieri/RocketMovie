import { Container, Content, Section, Cards, Tag, Header, ListTags} from "./styles"
import { Link } from "react-router-dom"
import { Button } from '../../components/Button'
import { FaStar, FaRegStar } from "react-icons/fa"
import { BiSolidCameraMovie } from "react-icons/bi"
import { Profile, Movie, Search } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar.svg"



export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
 const [ search, setSearch]  = useState("")
 const [movies, setMovies] = useState([])

 const navigate = useNavigate()

 function handleTagsSelected(tagName){
   if (tagName === "all") {
     return setTagsSelected([])
   }
  const alreadySelected = tagsSelected.includes(tagName)
  if(alreadySelected){
    const filteredTags = tagsSelected.filter( tag=>  tag !== tagName)
    setTagsSelected(filteredTags)
  }else{
    setTagsSelected(prevState => [...prevState, tagName])
  }
 }

 function handleDetails(id){
  navigate(`/details/${id}`)
 }

 useEffect(()=> {
  async function fetchTags (){
    const response = await api.get("/tags")
    setTags(response.data)
  }
  fetchTags()
 },[])

 useEffect(() => {
  async function fetchMovies(){
    const response = await api.get(`/movie_notes?title=${search}&tags=${tagsSelected}`)
    setMovies(response.data)
  }
  fetchMovies()
 }, [tagsSelected, search])

    const { signOut, user } = useAuth()
 const avatarUrl = user.avatar
   ? `${api.defaults.baseURL}/files/${user.avatar}`
   : avatarPlaceholder

  return (
    <Container>
      <Header>
        <Movie>
          <BiSolidCameraMovie />
          <span>RocketMovie</span>
        </Movie>

        <Search>
          <input
            type="text"
            placeholder="Pesquisar pelo título"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Profile>
          <div>
            <strong>{user.name}</strong>

            <button onClick={signOut}>Sair</button>
          </div>
          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </Profile>
      </Header>

      <main>
        <Content>
          <ListTags>
            <li>
              <ButtonText
                title="Todos"
                onClick={() => handleTagsSelected("all")}
                isActive={tagsSelected.length === 0}
              />
            </li>
            {tags &&
              tags.map((tag) => (
                <li key={String(tag.id)}>
                  <ButtonText
                    title={tag.name}
                    onClick={() => handleTagsSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)}
                  />
                </li>
              ))}
          </ListTags>
          <Section>
            <h1>Meus filmes</h1>
            <Link to="/new">
              <Button title="Adicionar filme" />
            </Link>
          </Section>

          <Cards>
            {movies.map(movie => (
              <div 
              onClick={()=> handleDetails(movie.id)} 
              data={movie} 
              key={String(movie.id)}>
                <h3> {movie.title} </h3>
                {renderRatingStars(movie.rating)}
                <p>{movie.description}</p>
                <span>
                  {movie.tags &&
                    movie.tags.map((tag, index) => (
                      <Tag key={String(index)}> title={tag} </Tag>
                    ))}
                </span>
              </div>
            ))}
          </Cards>
        </Content>
      </main>
    </Container>
  )
}
function renderRatingStars(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0

  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />)
  }

  if (halfStar) {
    stars.push(<FaRegStar key={stars.length} />)
  }

  return stars
}