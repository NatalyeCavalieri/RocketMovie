import { Container, Content, Form, NewTag } from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react"



export function New(){
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

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
          {
            tags.map((tag, index) => (
              <NoteItem 
              key={String(index)}
              value={tag}
              onClick={() =>handleRemoveTag(tag)}
              />
            ))
          }
          <NoteItem
            isNew
            placeholder="New Tag"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />
        </NewTag>
        <div>
          <Button title="Excluir Filme" variant />
          <Button title="Salvar alterações" />
        </div>
      </Content>
    </Container>
  )
}