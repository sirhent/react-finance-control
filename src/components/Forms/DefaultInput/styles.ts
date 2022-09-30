import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dynamicUnderlineColors = {
  primary: "product_primary_blue",
  secondary: "product_secondary_ruby",
  success: "product_semantic_success",
  warning: "product_semantic_warning",
  error: "product_semantic_error",
};

export const UnderlineMessageContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 1px;
  overflow: hidden;

  height: ${(props) => props.theme.stroke_size_tiny};

  /* prettier-ignore */
  transition:
    height
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.ease_out_quad};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.theme.stroke_size_tiny};
    transform: scaleX(1);
    transform-origin: right;

    background-color: ${(props) => props.theme.color_border_light};
    box-shadow: ${(props) => props.theme.fx_input_underglow_blue_transparent};

    /* prettier-ignore */
    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad} 150ms;
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(0);
    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad}
      0ms;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.theme.stroke_size_tiny};
    transform: scaleX(0);
    transform-origin: left;

    background-color: ${(props) => props.theme.color_product_primary_light};
    box-shadow: ${(props) => props.theme.fx_input_underglow_blue_transparent};

    /* prettier-ignore */
    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad}
      0ms;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    box-shadow: ${(props) => props.theme.fx_input_underglow_blue};
    /* prettier-ignore */
    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad}
      150ms;
  }
`;

export const DynamicMessage = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme.color_font_text_primary};
`;

export const BaseInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const BaseInput = styled.input`
  position: relative;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: none;

  font-family: ${(props) => props.theme.secondary_font_family};
  font-weight: 400;
  font-size: ${(props) => props.theme.font_secondary_size_small};
  color: ${(props) => props.theme.color_font_text_primary};

  &::placeholder {
    opacity: 1;
    color: ${(props) => props.theme.color_font_text_secondary};
    font-size: ${(props) => props.theme.font_secondary_size_small};
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:placeholder-shown + label {
    opacity: 0;
    transform: translateY(0);
    font-size: ${(props) => props.theme.font_secondary_size_small};

    pointer-events: none;
    user-select: none;
  }

  &:hover
    ~ ${UnderlineMessageContainer}::before,
    &:focus
    ~ ${UnderlineMessageContainer}::before {
    transform: scaleX(0);
    /* prettier-ignore */
    transition:
      all
      ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad}
      0ms;
  }

  /* prettier-ignore */
  &:hover ~ ${UnderlineMessageContainer}::after,
  &:focus ~ ${UnderlineMessageContainer}::after {
    transform: scaleX(1);
    box-shadow: ${(props) => props.theme.fx_input_underglow_blue};
    transition: all ${(props) => props.theme.transition_time_default}
      ${(props) => props.theme.ease_out_quad} 150ms;
  }

  &:hover ~ ${UnderlineMessageContainer} {
    height: 2rem;
  }
`;

export const DefaultLabel = styled.label`
  position: absolute;
  left: 1.5rem;
  top: 1rem;

  opacity: 1;
  visibility: visible;
  transform: translateY(-3rem);

  pointer-events: all;
  user-select: none;

  font-size: ${(props) => props.theme.font_secondary_size_small};
  font-weight: 400;
  color: ${(props) => props.theme.color_font_text_secondary};

  /* prettier-ignore */
  transition:
    transform
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.ease_out_quad},
    opacity
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.ease_out_quad},
    font-size
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.ease_out_quad};
`;
