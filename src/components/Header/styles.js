import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 70px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 70px;
    height: 70px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    line-height: 24px;

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
      border: none;
      background: none;
    }

    strong {
      font-size: 16px;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 19px 24px;
    border-radius: 10px;
    border: none;
    width: 630px;
  }
`

export const Movie = styled.div`
  align-items: center;
  padding: 42px;
  display: flex;

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > span {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-left: 5px;
  }
`
