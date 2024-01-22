import { BiSolidCameraMovie } from "react-icons/bi"
import { Container, Profile, Movie, Search } from "./styles"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar.svg"
import { useNavigate } from "react-router-dom"



export function Header() {
   const { signOut, user } = useAuth()
   const navigate = useNavigate()

   function handleSignOut(){
    navigate("/")
    signOut()
   }
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Movie>
        <BiSolidCameraMovie />
        <span>MovieNotes</span>
      </Movie>

      <Search>
        <input type="text" placeholder="Search by title" />
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>

          <button onClick={handleSignOut}>Exit</button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}
