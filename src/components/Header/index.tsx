import { useTranslation } from "react-i18next";

import * as Styled from "./styles";

import financeControlLogo from "../../assets/images/brand/Finance_Control_Logo.svg";
import { DefaultButton } from "../Buttons/StdButton";

export function Header() {
  const { t } = useTranslation();

  return (
    <Styled.Background>
      <Styled.HeaderContainer>
        <img
          src={financeControlLogo}
          alt=""
          title={t("common.logoAltText")}
        />

        <DefaultButton
          buttonText={t("pages.transactions.header.newTransaction")}
          variant="primary_standard"
        />
      </Styled.HeaderContainer>
    </Styled.Background>
  );
}