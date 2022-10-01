import styled from "styled-components";
import { TransactionItemVariants } from ".";

const themeColors = {
  success: {
    color_default: "color_semantic_success",
    color_hover: "color_semantic_success_light",
    color_border_hover: "color_semantic_success_light_50",
    fx_container_hover: "fx_shadow_success_underglow_soft",
  },
  error: {
    color_default: "color_semantic_error",
    color_hover: "color_semantic_error_light",
    color_border_hover: "color_semantic_error_light_50",
    fx_container_hover: "fx_shadow_error_underglow_soft",
  },
}

export const ItemLeftBar = styled.div<TransactionItemVariants>`
  min-width: 0.6rem;
  height: 3.6rem;
  
  border-radius: ${(props) => props.theme.border_radius_circle};
  background-color: ${(props) =>
    props.theme[themeColors[props.themeColor].color_default]
  };

  transition:
    background-color
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};
`;

export const TransactionValue = styled.span<TransactionItemVariants>`
  max-width: 20rem;
  width: 100%;

  color: ${(props) => props.theme[themeColors[props.themeColor].color_default]};

  transition:
    color
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};
`;

export const TransactionsListContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const TransactionItem = styled.article<TransactionItemVariants>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 1rem 3.2rem 1rem 1rem;
  
  border:
    ${(props) => props.theme.stroke_size_tiny}
    solid
    ${(props) => props.theme.color_border};
  border-radius: ${(props) => props.theme.border_radius_regular};
  background-color: ${(props) => props.theme.color_bg_tertiary};

  transition:
    all
    ${(props) => props.theme.transition_time_default}
    ${(props) => props.theme.bezier_ease_out_quad};

  &:hover {
    border:
      ${(props) => props.theme.stroke_size_tiny}
      solid
      ${(props) => props.theme[themeColors[props.themeColor].color_border_hover]};
  }

  &:hover ${ItemLeftBar} {
    background-color: ${(props) =>
      props.theme[themeColors[props.themeColor].color_hover]
    };
  }

  &:hover ${TransactionValue} {
    color: ${(props) =>
      props.theme[themeColors[props.themeColor].color_hover]
    };
  }
`;

export const TransactionTitle = styled.h1`
  font-family: ${(props) => props.theme.font_family_secondary};
  font-size: ${(props) => props.theme.font_secondary_size_small};
  font-weight: 400;
  color: ${(props) => props.theme.color_font_text_primary};
  width: 100%;
`;


export const TransactionType = styled.span`
  max-width: 22rem;
  width: 100%;
`;

export const TransactionDate = styled.span`
  max-width: 12rem;
  width: 100%;

  font-size: 1.4rem;
`;