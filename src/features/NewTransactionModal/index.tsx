import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { DefaultButton } from "../../components/Buttons/StdButton";
import { DefaultInput } from "../../components/Forms/DefaultInput";
import * as Styled from "./styles";

export function NewTransactionModal() {
  const { t } = useTranslation();

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

        <Styled.ModalForm action="">
          <Styled.ModalInputsContainer>
            <DefaultInput
              type="text"
              labelText={t("modals.newTransaction.form.inputOne.label")}
              placeholder={t("modals.newTransaction.form.inputOne.placeholder")}
              required
            />
            <DefaultInput
              type="number"
              labelText={t("modals.newTransaction.form.inputTwo.label")}
              placeholder={t("modals.newTransaction.form.inputTwo.placeholder")}
              required
            />
            <DefaultInput
              type="text"
              labelText={t("modals.newTransaction.form.inputThree.label")}
              placeholder={t("modals.newTransaction.form.inputThree.placeholder")}
              required
            />
          </Styled.ModalInputsContainer>

          <Styled.TransactionType>
            <Styled.TransactionTypeButton variant="success" value="income">
              <Styled.RadioButton />
              Entrada
            </Styled.TransactionTypeButton>
            <Styled.TransactionTypeButton variant="error" value="outcome">
              <Styled.RadioButton />
              Gasto
            </Styled.TransactionTypeButton>
          </Styled.TransactionType>

          <DefaultButton
            type="submit"
            buttonText={t("modals.newTransaction.form.submitButton.text")}
            title={t("modals.newTransaction.form.submitButton.title")}
            variant="success_standard"
          />
        </Styled.ModalForm>
      </Styled.ModalContent>
    </Dialog.Portal>
  );
}