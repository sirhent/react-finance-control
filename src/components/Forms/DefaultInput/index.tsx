import React, { InputHTMLAttributes } from "react";

import * as Styled from "./styles";

interface DefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  variant?: "ruby";
  leftIcon?: "MagnifyingGlass";
  rightIcon?: "Check" | "Info";
}

export function DefaultInput(props: DefaultInputProps) {
  return (
    <Styled.BaseInputContainer>
      <Styled.BaseInput {...props} />
      <Styled.DefaultLabel>{props.labelText}</Styled.DefaultLabel>

      <Styled.UnderlineMessageContainer>
        <Styled.DynamicMessage>Dynamic message</Styled.DynamicMessage>
      </Styled.UnderlineMessageContainer>
    </Styled.BaseInputContainer>
  );
}
