import { Container, Form, Background } from "./styles"
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { FiUser } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi";
import { api } from '../../services/api'



export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
    return alert("Fill in all the fields")
    }
    api.post("/users", {name, email, password})
    .then(()=>{
      alert("User registered with successful")
      navigate(-1)
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Not is possible register")
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>MoviesNotes</h1>
        <p>Application to movies notes that you watched</p>
        <h3>Create your account</h3>
        <Input
          type="text"
          placeholder="Name"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          icon={MdOutlineEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          icon={RiLockPasswordFill}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" title="Register" onClick={handleSignUp} />
        <Link to="/">
          <ButtonText title="Return to sigIn" icon={FiArrowLeft} isActive />
        </Link>
      </Form>
    </Container>
  )
}
