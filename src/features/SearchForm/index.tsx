import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { DefaultButton } from "../../components/Buttons/StdButton";
import { DefaultInput } from "../../components/Forms/DefaultInput";
import * as Styled from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { t } = useTranslation();
  const { fetchTransactions } = useContext(TransactionsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
    console.log(data);
  }

  return (
    <Styled.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <DefaultInput
        type="text"
        labelText={t("pages.transactions.searchForm.label")}
        placeholder={t("pages.transactions.searchForm.label")}
        registerProps={register("query")}
      />
      <DefaultButton
        type="submit"
        buttonText={t("pages.transactions.searchForm.buttonText")}
        variant="primary_less_important"
        iconName="MagnifyingGlass"
        iconWeight="bold"
        iconSize={16}
        disabled={isSubmitting}
      />
    </Styled.SearchFormContainer>
  );
}