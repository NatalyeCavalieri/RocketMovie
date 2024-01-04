import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "content";
  width: 100%;
  height: 100vh;
  padding-bottom: 60px;

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
    overflow-y: scroll;
    padding: 15px 0;

  }
`

export const Content = styled.div`
  flex: 1;
  padding: 15px 0;
  
`

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
  padding-left: 115px;
  padding-right: 65px;
  

  > h1 {
    font-size: 30px;
    font-weight: normal;
  }

  > button {
    height: 48px;
    width: 200px;
    margin: 0;
    text-align: center;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 100vh;




  > div {
    background-color: ${({ theme }) => theme.COLORS.TAG};
    margin: 0 110px;
    padding: 32px;
    width: 1140px;
    border-radius: 16px;

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: justify;
      text-overflow: ellipsis;
      overflow: hidden;
      align-self: stretch;
      height: 45px;
      margin-bottom: 20px;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 20px;
      margin-right: 10px;
      margin-bottom: 15px;
    }
  }

  h3 {
    margin-bottom: 8px;
  }
`

export const Tag = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
