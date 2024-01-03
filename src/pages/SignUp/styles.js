import styled from "styled-components"
import backgroundImg from "../../../src/assets/image.svg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
  }

  > p {
    font-size: 14px;
    margin-bottom: 48px;
  }

  > h3 {
    margin-bottom: 48px;
  }


  > button {
    width: 340px;
    margin-bottom: 42px;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
