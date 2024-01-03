import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft, FiUser, FiCamera } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="http://github.com/natalyecavalieri.png"
            alt="Photo of the user"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="Email" icon={MdOutlineEmail} />
        <Input
          type="password"
          placeholder="Senha atual"
          icon={RiLockPasswordLine}
        />
        <Input
          type="password"
          placeholder="Nova senha"
          icon={RiLockPasswordLine}
        />
        <Button type="button" title="Salvar" />
      </Form>
    </Container>
  )
}
