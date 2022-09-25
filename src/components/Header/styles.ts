import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.color_bg_primary};
`;

export const HeaderContainer = styled.div`
  max-width: ${(props) => props.theme.container_default_width};
  padding-top: 4rem;
  padding-right: ${(props) => props.theme.container_default_padding_horizontal};
  padding-bottom: 13rem;
  padding-left: ${(props) => props.theme.container_default_padding_horizontal};
  display: flex;
  justify-content: space-between;
`;