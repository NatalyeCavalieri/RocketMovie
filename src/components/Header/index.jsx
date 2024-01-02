import { BiSolidCameraMovie } from "react-icons/bi"
import { Container, Profile, Movie, Search } from "./styles"

export function Header() {
  return (
    <Container>
      <Movie>
        <BiSolidCameraMovie />
        <span>RocketMovie</span>
      </Movie>

      <Search>
        <input type="text" placeholder="Search for title" />
      </Search>

      <Profile>
        <div>
          <strong>Natalye Cavalieri</strong>
          <button>Exit</button>
        </div>
        <img src="https://github.com/natalyecavalieri.png" alt="My image" />
      </Profile>
    </Container>
  )
}
