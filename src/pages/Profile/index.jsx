import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft, FiUser, FiCamera } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from "react"
import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar.svg'
import { api } from '../../services/api'


export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdated = Object.assign(user, updated)
  
    await updateProfile({ user: userUpdated, avatarFile })
  }

  async function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
          Return
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Photo of the user"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          type="text"
          placeholder="Name"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          icon={MdOutlineEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Old password"
          icon={RiLockPasswordLine}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          type="password"
          placeholder="New password"
          icon={RiLockPasswordLine}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button type="button" title="Save" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
