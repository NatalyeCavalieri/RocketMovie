import { Container, Form, Background } from "./styles"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { useAuth } from "../../hooks/auth.jsx"

export function SignIn() {
  const data = useAuth()
  console.log("Meu contexto =>", data)
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>
        <Input type="text" placeholder="Email" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={RiLockPasswordFill} />
        <Button type="button" title="Entrar" />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
