import { BiSolidCameraMovie } from "react-icons/bi"
import { Container, Profile, Movie, Search } from "./styles"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth()
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
          <strong>Natalye Cavalieri</strong>

          <button onClick={signOut}>Sair</button>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/natalyecavalieri.png"
            alt="Imagem do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
