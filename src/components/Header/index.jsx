import { BiSolidCameraMovie } from "react-icons/bi"
import { Container, Profile, Movie, Search } from "./styles"
import { Link } from "react-router-dom"

export function Header() {
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

          <button>Sair</button>
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
