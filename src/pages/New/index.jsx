import { Container, Content, Form, NewTag } from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Fill in the field title")
    }
    if (!rating) {
      return alert("Fill in the field rating")
    }
    if (newTag) {
      return alert("Fill in the field genre and don't forget of add the genre ")
    }

    await api.post("/movie_notes", { title, description, rating, tags })
    alert("Note created with successful")
    navigate(-1)
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
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              min="0"
              max="5"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>
        <p>Movie Genre</p>
        <NewTag>
          {tags.map((tag, index) => (
            <NoteItem
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
            />
          ))}
          <NoteItem
            isNew
            placeholder="New genre"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />
        </NewTag>
        <div>
          <Button title="Salvar alterações" onClick={handleNewNote} />
        </div>
      </Content>
    </Container>
  )
}
