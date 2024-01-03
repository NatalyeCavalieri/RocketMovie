import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  padding-inline: 110px;
  padding-top: 40px;
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    gap: 8px;
    margin-bottom: 24px;
  }
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 40px;
margin-top: 40px;

>div{
  display: flex;
  gap: 40px;
}
`
