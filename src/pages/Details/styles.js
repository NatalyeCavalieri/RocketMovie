import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  width: 100%;
  height: 100vh;
  padding-bottom: 20px;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #fd859b #262529;

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #262529;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #fd859b;
    border-radius: 10px;
    border: 3px solid #262529;
  }
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 15px 0;

    a {
      display: flex;
      color: ${({ theme }) => theme.COLORS.PINK};
      gap: 8px;
      align-items: center;
      margin-bottom: 24px;
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  margin-left: 115px;

  > div {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 24px;

    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }

  
  }

  h1{
    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 20px;
      margin-left: 10px;
    }
  }
`


export const Text = styled.p`
display: flex;
text-align: justify;
width: 1130px;
margin-top: 40px;
`