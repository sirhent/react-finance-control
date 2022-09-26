import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const UpperBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 21.2rem;
  z-index: -9999;

  background-color: ${(props) => props.theme.color_bg_primary};
`;

export const BottomBackground = styled.div`
  position: absolute;
  top: 21.2rem;
  width: 100%;
  min-height: calc(100vh - 21.2rem);
  z-index: -9999;

  background-color: ${(props) => props.theme.color_bg_secondary};
`;

export const HeaderContainer = styled.div`
  max-width: ${(props) => props.theme.container_default_width};
  margin: 0 auto;
  padding-top: 4rem;
  padding-left: ${(props) => props.theme.container_default_padding_horizontal};
  padding-right: ${(props) => props.theme.container_default_padding_horizontal};
`;

export const BodyContainer = styled.div`
  max-width: ${(props) => props.theme.container_default_width};
  margin: 0 auto;
  padding: 5rem ${(props) => props.theme.container_default_padding_horizontal};

  display: flex;
  flex-direction: column;
`;