import { ReactNode } from "react";
import { Header } from "../../components/Header";
import * as Styled from "./styles";

interface DefaultPageLayoutProps {
  children: ReactNode;
}

export function DefaultPageLayout(props: DefaultPageLayoutProps) {
  return (
    <Styled.Wrapper>
      <Styled.UpperBackground />
      <Styled.BottomBackground />

      <Styled.HeaderContainer>
        <Header />
      </Styled.HeaderContainer>

      <Styled.BodyContainer>
        {props.children}
      </Styled.BodyContainer>
    </Styled.Wrapper>
  );
}
