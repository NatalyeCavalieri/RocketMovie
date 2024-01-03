import { Container, Content, Form } from './styles'
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { FiArrowLeft } from "react-icons/fi"



export function New(){
  return (
    <Container>
      <Header />
      <Content>
        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
        <h1>Novo filme</h1>
        <Form>
          <div>
            <Input type="text" placeholder="Título" />
            <Input
              type="number"
              min="0"
              max="5"
              placeholder="Sua nota (de 0 a 5)"
            />
          </div>
          <TextArea placeholder="Observações" />
        </Form>
      </Content>
    </Container>
  )
}