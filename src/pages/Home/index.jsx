import { Container, Content, Section, Cards, Header} from "./styles"
import { Link } from "react-router-dom"
import { Button } from '../../components/Button'
import { FaStar, FaRegStar } from "react-icons/fa"
import { BiSolidCameraMovie } from "react-icons/bi"
import { Profile, Movie, Search } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar.svg"
import { Tag } from '../../components/Tag'



export function Home() {

 const [ search, setSearch]  = useState("")
 const [movies, setMovies] = useState([])


 const navigate = useNavigate()


 function handleDetails(id){
  navigate(`/details/${id}`)
 }



 useEffect(() => {
  async function fetchMovies(){
    const response = await api.get(
      `/movie_notes?title=${search}`)
      setMovies(response.data)
  }
  fetchMovies()
 }, [search])

    const { signOut, user } = useAuth()
 const avatarUrl = user.avatar
   ? `${api.defaults.baseURL}/files/${user.avatar}`
   : avatarPlaceholder

  return (
    <Container>
      <Header>
        <Movie>
          <BiSolidCameraMovie />
          <span>MovieNotes</span>
        </Movie>

        <Search>
          <input
            type="text"
            placeholder="Search by title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Profile>
          <div>
            <strong>{user.name}</strong>

            <button onClick={signOut}>Exit</button>
          </div>
          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </Profile>
      </Header>

      <main>
        <Content>
          <Section>
            <Link to="/new">
              <Button title="Add movie" />
            </Link>
          </Section>

          <Cards>
            {movies.map((movie) => (
              <div
                onClick={() => handleDetails(movie.id)}
                data={movie.id}
                key={String(movie.id)}
              >
                <h3> {movie.title} </h3>
                {renderRatingStars(movie.rating)}
                <p>{movie.description}</p>
         
               <Tag  />
    
             
              </div>
            ))}
          </Cards>
        </Content>
      </main>
    </Container>
  )
}
export function renderRatingStars(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0

  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i}/>)
  }

  if (halfStar) {
    stars.push(<FaRegStar key={stars.length} />)
  }

  return stars
}