import { BiSolidCameraMovie } from "react-icons/bi"
import { Container, Profile, Movie, Search } from "./styles"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <Movie>
        <BiSolidCameraMovie />
        <span>RocketMovie</span>
      </Movie>

      <Search>
        <input type="text" placeholder="Pesquisar pelo título" />
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
    </Container>
  )
}
