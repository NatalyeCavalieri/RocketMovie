import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  color: ${({ theme, isNew }) =>
    isNew ? `${theme.COLORS.GRAY_100}` : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;
  padding-right: 16px;
  

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    height: 24px;
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    white-space: nowrap;
    overflow: visible;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
