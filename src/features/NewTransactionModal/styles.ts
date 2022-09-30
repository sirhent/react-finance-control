import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.color_bg_primary_50};
`;

export const ModalContent = styled(Dialog.Content)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 4rem;
  max-width: 52rem;
  width: 100%;

  border-radius: ${(props) => props.theme.border_radius_regular};
  background-color: ${(props) => props.theme.color_bg_tertiary};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalTitle = styled(Dialog.Title)`
  font-family: ${(props) => props.theme.font_family_main};
  font-weight: 400;
  font-size: ${(props) => props.theme.font_main_size_medium};
  color: ${(props) => props.theme.color_font_heading};
`;

export const ModalCloseButton = styled(Dialog.Close)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0.3rem;

  border: none;
  border-radius: ${(props) => props.theme.border_radius_tiny};
  background-color: transparent;

  color: ${(props) => props.theme.color_font_text_primary};

  cursor: pointer;

  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};

  &:focus,
  &:hover {
    color: ${(props) => props.theme.color_semantic_error_light};
    background-color: ${(props) => props.theme.color_bg_secondary};
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const ModalInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const radioButtonVariants = {
  success: {
    default_bg: "color_bg_tertiary",
    border_color: "color_white_30",
    circle_bg: "color_white_40",
    hover_border_color: "color_semantic_success_light_50",
    hover_bg: "color_semantic_success_light_70",
    default_shadow: "fx_button_success_hover_underglow_transparent",
    hover_shadow: "fx_button_radio_success_underglow",
  },
  error: {
    default_bg: "color_bg_tertiary",
    border_color: "color_white_30",
    circle_bg: "color_white_40",
    hover_border_color: "color_semantic_error_light_50",
    hover_bg: "color_semantic_error_light_70",
    default_shadow: "fx_button_error_hover_underglow_transparent",
    hover_shadow: "fx_button_radio_error_underglow",
  },
}

export const RadioButton = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;

  border-radius: ${(props) => props.theme.border_radius_circle};
  border:
    ${(props) => props.theme.stroke_size_tiny}
    solid
    ${(props) => props.theme.color_white_30};
  background-color: ${(props) => props.theme.color_bg_tertiary};
  box-shadow: ${(props) => props.theme.fx_button_radio_success_underglow_transparent};

  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};

  &::before {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    border-radius: ${(props) => props.theme.border_radius_circle};

    /* TODO: Solve light theme variables on dark theme */
    background-color: #b8c6b8;

    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.bezier_ease_out_quad};
  }
`;

interface TransactionTypeButtonProps {
  variant: "success" | "error";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  border: none;
  background-color: transparent;

  font-family: ${(props) => props.theme.font_family_secondary};
  font-size: ${(props) => props.theme.font_secondary_size_small};
  font-weight: 400;
  color: ${(props) => props.theme.color_font_text_primary};

  cursor: pointer;

  &:hover ${RadioButton} {
    border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme[radioButtonVariants[props.variant].hover_border_color]};
    background-color: ${(props) => props.theme.color_bg_secondary};
    box-shadow: ${(props) => props.theme[radioButtonVariants[props.variant].hover_shadow]};
  }

  &[data-state="checked"] ${RadioButton} {
    /* border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme.color_white_40}; */
    /* background-color: ${(props) => props.theme.color_bg_secondary}; */
    border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme[radioButtonVariants[props.variant].hover_border_color]};
    background-color: ${(props) => props.theme[radioButtonVariants[props.variant].hover_bg]};
    box-shadow: ${(props) => props.theme[radioButtonVariants[props.variant].hover_shadow]};
  }

  &[data-state="checked"] ${RadioButton}::before {
    opacity: 1;
  }
`;