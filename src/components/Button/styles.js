import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, variant }) => variant ? 'black' : theme.COLORS.PINK};
  color: ${({ theme, variant }) => variant ? `${theme.COLORS.PINK}` : theme.COLORS.BACKGROUND_900};

  height: 56px;
  border: none;
  padding: 0 16px;
  margin-top:16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`