import styled from "styled-components";
import { SummaryCardVariants } from ".";

const themeColors = {
  success: {
    color_default: "color_semantic_success",
    color_hover: "color_semantic_success_light",
    color_border_hover: "color_semantic_success_light_50",
    fx_container_hover: "fx_shadow_success_underglow_soft",
  },
  progress: {
    color_default: "color_semantic_progress",
    color_hover: "color_semantic_progress_light",
    color_border_hover: "color_semantic_progress_light_50",
    fx_container_hover: "fx_shadow_progress_underglow_soft",
  },
  error: {
    color_default: "color_semantic_error",
    color_hover: "color_semantic_error_light",
    color_border_hover: "color_semantic_error_light_50",
    fx_container_hover: "fx_shadow_error_underglow_soft",
  },
}

export const LeftBar = styled.div<SummaryCardVariants>`
  width: 1.6rem;
  height: 100%;

  background-color: ${(props) => props.theme[themeColors[props.themeColor].color_default]};
  border-radius: ${(props) => props.theme.border_radius_circle};

  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};
`;

export const IconContainer = styled.div<SummaryCardVariants>`
  height: 3.2rem;
  width: 3.2rem;
  margin-left: auto;

  color: ${(props) => props.theme[themeColors[props.themeColor].color_default]};

  transition:
    color
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};
`;

export const SummaryCardContainer = styled.div<SummaryCardVariants>`
  display: flex;
  padding: 2.4rem 2.4rem 2.4rem 1.2rem;
  gap: 1.2rem;
  width: 100%;

  background-color: ${(props) => props.theme.color_bg_secondary};
  border:
    ${(props) => props.theme.stroke_size_tiny}
    solid
    ${(props) => props.theme.color_border};
  border-radius: ${(props) => props.theme.border_radius_regular};

  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};

  &:hover {
    border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme[themeColors[props.themeColor].color_border_hover]};
    box-shadow: ${(props) => props.theme[themeColors[props.themeColor].fx_container_hover]};
  }

  &:hover ${LeftBar} {
    background-color: ${(props) => props.theme[themeColors[props.themeColor].color_hover]};
  }

  &:hover ${IconContainer} {
    color: ${(props) => props.theme[themeColors[props.themeColor].color_hover]};
  }
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 0.5rem 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_secondary_size_small};
  font-weight: 400;
  color: ${(props) => props.theme.color_font_text_primary};
`;

export const CurrencyValue = styled.span`
  font-family: ${(props) => props.theme.font_family_main};
  font-size: ${(props) => props.theme.font_main_size_large};
  font-weight: 700;
  color: ${(props) => props.theme.color_font_heading};
`;