import styled, { css } from "styled-components";

import { DefaultButtonVariants } from "./index";

const baseButtonVariants = {
  primary_standard: {
    default_bg: "color_product_primary_70",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_product_primary_light_70",
    default_shadow: "button_primary_hover_underglow_transparent",
    hover_shadow: "fx_button_primary_hover_underglow",
  },
  primary_less_important: {
    default_bg: "color_product_primary_04",
    text_color: "color_product_primary",
    border_color: "color_product_primary_light_70",
    hover_bg: "color_product_primary_light_70",
    default_shadow: "fx_button_primary_hover_underglow_transparent",
    hover_shadow: "fx_button_primary_hover_underglow",
  },
  success_standard: {
    default_bg: "color_semantic_success_90",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_semantic_success_light_70",
    default_shadow: "fx_button_success_hover_underglow_transparent",
    hover_shadow: "fx_button_success_hover_underglow",
  },
  success_less_important: {
    default_bg: "color_semantic_success_4",
    text_color: "color_semantic_sucess",
    border_color: "color_semantic_success_light_70",
    hover_bg: "color_semantic_success_light_70",
    default_shadow: "fx_button_success_hover_underglow_transparent",
    hover_shadow: "fx_button_success_hover_underglow",
  },
  progress_standard: {
    default_bg: "color_semantic_progress_90",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_semantic_progress_light",
    default_shadow: "fx_button_progress_hover_underglow_transparent",
    hover_shadow: "fx_button_progress_hover_underglow",
  },
  progress_less_important: {
    default_bg: "color_semantic_progress_4",
    text_color: "color_semantic_progress",
    border_color: "color_semantic_progress_light_70",
    hover_bg: "color_semantic_progress_light_70",
    default_shadow: "fx_button_progress_hover_underglow_transparent",
    hover_shadow: "fx_button_progress_hover_underglow",
  },
  warning_standard: {
    default_bg: "color_semantic_warning_90",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_semantic_warning_light",
    default_shadow: "fx_button_warning_hover_underglow_transparent",
    hover_shadow: "fx_button_warning_hover_underglow",
  },
  warning_less_important: {
    default_bg: "color_semantic_warning_4",
    text_color: "color_semantic_warning",
    border_color: "color_semantic_warning_light_70",
    hover_bg: "color_semantic_warning_light_70",
    default_shadow: "fx_button_warning_hover_underglow_transparent",
    hover_shadow: "fx_button_warning_hover_underglow",
  },
  error_standard: {
    default_bg: "color_semantic_error_90",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_semantic_error_light",
    default_shadow: "fx_button_error_hover_underglow_transparent",
    hover_shadow: "fx_button_error_hover_underglow",
  },
  error_less_important: {
    default_bg: "color_semantic_error_4",
    text_color: "color_semantic_error",
    border_color: "color_semantic_error_light_70",
    hover_bg: "color_semantic_error_light_70",
    default_shadow: "fx_button_error_hover_underglow_transparent",
    hover_shadow: "fx_button_error_hover_underglow",
  },
  info_standard: {
    default_bg: "color_semantic_information_90",
    text_color: "color_font_button_opaque",
    border_color: "color_button_stroke_default",
    hover_bg: "color_semantic_information_light",
    default_shadow: "fx_button_information_hover_underglow_transparent",
    hover_shadow: "fx_button_information_hover_underglow",
  },
  info_less_important: {
    default_bg: "color_semantic_information_4",
    text_color: "color_semantic_information",
    border_color: "color_semantic_information_light_70",
    hover_bg: "color_semantic_information_light_70",
    default_shadow: "button_information_hover_underglow_transparent",
    hover_shadow: "button_information_hover_underglow",
  },
};

export const baseButtonStylesMixin = css<DefaultButtonVariants>`
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: ${(props) => props.theme.border_radius_tiny};
  border: ${(props) => props.theme.stroke_size_tiny} solid
    ${(props) =>
      props.theme[
        baseButtonVariants[props.variant]
          .border_color as keyof typeof props.theme
      ]};
  outline: none;

  background-color: ${(props) =>
    props.theme[
      baseButtonVariants[props.variant].default_bg as keyof typeof props.theme
    ]};
  box-shadow: ${(props) =>
    props.theme[
      baseButtonVariants[props.variant]
        .default_shadow as keyof typeof props.theme
    ]};

  @supports (backdrop-filter: blur(15px)) {
    backdrop-filter: blur(15px);
  }

  color: ${(props) =>
    props.theme[
      baseButtonVariants[props.variant].text_color as keyof typeof props.theme
    ]};
  font-family: ${(props) => props.theme.font_family_main};
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;

  /* prettier-ignore */
  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    /* prettier-ignore */
    border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme.color_button_stroke_hover};
    background-color: ${(props) =>
      props.theme[
        baseButtonVariants[props.variant].hover_bg as keyof typeof props.theme
      ]};
    box-shadow: ${(props) =>
      props.theme[
        baseButtonVariants[props.variant]
          .hover_shadow as keyof typeof props.theme
      ]};

    color: ${(props) => props.theme.color_font_button_opaque};
  }

  &:disabled {
    color: ${(props) => props.theme.color_font_text_secondary};
    background-color: ${(props) => props.theme.color_bg_tertiary};

    cursor: not-allowed;
  }
`;

export const BaseButton = styled.button<DefaultButtonVariants>`
  ${baseButtonStylesMixin}
`;