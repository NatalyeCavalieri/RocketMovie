import { Container, Form, Background } from "./styles"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { useAuth } from "../../hooks/auth.jsx"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>
        <Input
          type="text"
          placeholder="Email"
          icon={MdOutlineEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={RiLockPasswordFill}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
