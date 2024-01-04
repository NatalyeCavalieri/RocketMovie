import { Container, Content, Form, NewTag } from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"



export function New(){
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft />
          Voltar
          </Link>
        
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
        <p>Marcadores</p>
        <NewTag>
          <NoteItem value="Science Fiction" />
          <NoteItem isNew placeholder="New Tag" />
        </NewTag>
        <div>
          <Button title="Excluir Filme" variant />
          <Button title="Salvar alterações" />
        </div>
      </Content>
    </Container>
  )
}