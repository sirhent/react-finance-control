import { useTranslation } from "react-i18next";

import * as Styled from "./styles";

import financeControlLogo from "../../assets/images/brand/Finance_Control_Logo.svg";
import { DefaultButton } from "../Buttons/StdButton";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../../features/NewTransactionModal";

export function Header() {
  const { t } = useTranslation();

  return (
    <Styled.HeaderContainer>
      <img
        src={financeControlLogo}
        alt=""
        title={t("common.logoAltText")}
      />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <DefaultButton
            buttonText={t("pages.transactions.header.newTransaction")}
            variant="primary_standard"
          />
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </Styled.HeaderContainer>
  );
}
