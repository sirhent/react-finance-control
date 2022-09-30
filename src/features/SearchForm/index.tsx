import { useTranslation } from "react-i18next";
import { DefaultButton } from "../../components/Buttons/StdButton";
import { DefaultInput } from "../../components/Forms/DefaultInput";
import * as Styled from "./styles";

export function SearchForm() {
  const { t } = useTranslation();

  return (
    <Styled.SearchFormContainer>
      <DefaultInput
        labelText={t("pages.transactions.searchForm.label")}
        placeholder={t("pages.transactions.searchForm.label")}
      />
      <DefaultButton
        buttonText={t("pages.transactions.searchForm.buttonText")}
        variant="primary_less_important"
        iconName="MagnifyingGlass"
        iconWeight="bold"
        iconSize={16}
      />
    </Styled.SearchFormContainer>
  );
}