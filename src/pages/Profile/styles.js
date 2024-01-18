import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  > header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.HEADER};

    >a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      padding: 60px 144px;
      gap: 5px;
    }
  }
`

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 70px;
  > :nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  > img {
    width: 186px;
    height: 186px;
    margin-top: -150px;
    border-radius:50%;
    object-fit: cover;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: 7px;
    right: 7px;

    > svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-size: 20px;
      cursor: pointer;
    }

    input {
      display: none;
    }
  }
`