import { useTranslation } from "react-i18next";

import * as Styled from "./styles";

import financeControlLogo from "../../assets/images/brand/Finance_Control_Logo.svg";

export function Header() {
  const { t } = useTranslation();

  return (
    <Styled.Background>
      <Styled.HeaderContainer>
        <img src={financeControlLogo} />
      </Styled.HeaderContainer>
    </Styled.Background>
  );
}