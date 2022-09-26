import { IconWeight } from "phosphor-react";

import { InsertIcon } from "../../InsertIcon";
import * as Styled from "./styles";

export interface DefaultButtonVariants {
  variant:
    | "primary_standard"
    | "primary_less_important"
    | "success_standard"
    | "success_less_important"
    | "progress_standard"
    | "progress_less_important"
    | "warning_standard"
    | "warning_less_important"
    | "error_standard"
    | "error_less_important"
    | "info_standard"
    | "info_less_important";
}

export interface DefaultButtonIcons {
  iconName?:
    | undefined
    | "Check"
    | "ArrowClockwise"
    | "X"
    | "CaretRight"
    | "PencilSimple"
    | "CopySimple"
    | "DownloadSimple";
  iconWeight?: undefined | IconWeight;
  iconSize?: undefined | number;
}

interface DefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DefaultButtonVariants,
    DefaultButtonIcons {
  buttonText: undefined | string;
}

export function DefaultButton({
  iconName = undefined,
  iconWeight = "bold",
  iconSize = 16,
  type = "button",
  buttonText,
  ...otherProps
}: DefaultButtonProps) {
  return (
    <Styled.BaseButton type={type} {...otherProps}>
      {iconName && (
        <InsertIcon
          iconName={iconName}
          iconWeight={iconWeight}
          iconSize={iconSize}
        />
      )}
      {buttonText}
      {otherProps.children}
    </Styled.BaseButton>
  );
}
