import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { DefaultButton } from "../../components/Buttons/StdButton";
import { DefaultInput } from "../../components/Forms/DefaultInput";
import * as Styled from "./styles";
import * as zod from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  value: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { t } = useTranslation();
  const { 
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Styled.ModalOverlay />

      <Styled.ModalContent>
        <Styled.ModalHeader>
          <Styled.ModalTitle>
            {t("modals.newTransaction.title")}
          </Styled.ModalTitle>

          <Styled.ModalCloseButton>
            <X size={24} />
          </Styled.ModalCloseButton>
        </Styled.ModalHeader>

        <Styled.ModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <Styled.ModalInputsContainer>
            <DefaultInput
              type="text"
              labelText={t("modals.newTransaction.form.inputOne.label")}
              placeholder={t("modals.newTransaction.form.inputOne.placeholder")}
              registerProps={register("description")}
              required
            />
            <DefaultInput
              type="number"
              labelText={t("modals.newTransaction.form.inputTwo.label")}
              placeholder={t("modals.newTransaction.form.inputTwo.placeholder")}
              registerProps={register("value", { valueAsNumber: true })}
              required
            />
            <DefaultInput
              type="text"
              labelText={t("modals.newTransaction.form.inputThree.label")}
              placeholder={t("modals.newTransaction.form.inputThree.placeholder")}
              registerProps={register("category")}
              required
            />
          </Styled.ModalInputsContainer>

          <Controller 
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <Styled.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <Styled.TransactionTypeButton variant="success" value="income">
                    <Styled.RadioButton />
                    Entrada
                  </Styled.TransactionTypeButton>
                  <Styled.TransactionTypeButton variant="error" value="outcome">
                    <Styled.RadioButton />
                    Gasto
                  </Styled.TransactionTypeButton>
                </Styled.TransactionType>
              );
            }}
          />

          <DefaultButton
            type="submit"
            buttonText={t("modals.newTransaction.form.submitButton.text")}
            title={t("modals.newTransaction.form.submitButton.title")}
            variant="success_standard"
            disabled={isSubmitting}
          />
        </Styled.ModalForm>
      </Styled.ModalContent>
    </Dialog.Portal>
  );
}