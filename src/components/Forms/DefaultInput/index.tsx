import React, { InputHTMLAttributes, useId } from "react";

import * as Styled from "./styles";

interface DefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  variant?: undefined | "ruby";
  leftIcon?: undefined | "MagnifyingGlass";
  rightIcon?: undefined | "Check" | "Info";
  registerProps: any;
}

export function DefaultInput({
      labelText,
      variant = undefined,
      leftIcon = undefined,
      rightIcon = undefined,
      registerProps,
      ...otherProps
    }: DefaultInputProps) {
  const inputId = useId();

  return (
    <Styled.BaseInputContainer>
      <Styled.BaseInput {...registerProps} {...otherProps} id={inputId} />
      <Styled.DefaultLabel htmlFor={inputId}>
        {labelText}
      </Styled.DefaultLabel>

      <Styled.UnderlineMessageContainer>
        <Styled.DynamicMessage>Dynamic message</Styled.DynamicMessage>
      </Styled.UnderlineMessageContainer>
    </Styled.BaseInputContainer>
  );
}
