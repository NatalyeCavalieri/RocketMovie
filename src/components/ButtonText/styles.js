import styled from "styled-components";

export const Container = styled.button`
background: none;
border: none;
color: ${({theme})=> theme.COLORS.PINK};
font-size: 16px;
justify-content: center;
align-items: center;
display: flex;

>svg{
margin-right: 5px;
}
`