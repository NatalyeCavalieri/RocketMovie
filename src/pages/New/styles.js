import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #ff859b #262529;

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 11px;
  }

  *::-webkit-scrollbar-track {
    background: #262529;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff859b;
    border-radius: 10px;
    border: 2px solid #ff859b;
  }
`

export const Content = styled.div`
  padding-inline: 110px;
  padding-top: 40px;
  padding-bottom: 85px;
  display: grid;
  grid-area: content;
  overflow-y: scroll;


  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    gap: 8px;
    margin-bottom: 24px;
  }

  > P {
    margin-bottom: 24px;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > div {
    display: flex;
    gap: 40px;
    width: 100%;
    > button {
      width: 100%;
    }
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
export const NewTag = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 16px;
  display: flex;
  gap: 24px;
  border-radius: 8px;
  margin-bottom: 40px;
`