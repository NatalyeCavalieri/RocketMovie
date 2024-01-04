import { Container, Form, Background } from "./styles"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { FiUser } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi";



export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="Email" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={RiLockPasswordFill} />
        <Button type="button" title="Cadastrar" />
        <Link to="/">
          <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
        </Link>
      </Form>
    </Container>
  )
}
