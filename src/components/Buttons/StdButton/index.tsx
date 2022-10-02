import { IconWeight } from "phosphor-react";
import { forwardRef, ReactNode } from "react";

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
    | "DownloadSimple"
    | "MagnifyingGlass";
  iconWeight?: undefined | IconWeight;
  iconSize?: undefined | number;
}

interface DefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DefaultButtonVariants,
    DefaultButtonIcons {
  buttonText: undefined | string;
  children?: ReactNode;
}

export const DefaultButton = forwardRef(function DefaultButton({
    iconName = undefined,
    iconWeight = "bold",
    iconSize = 16,
    type = "button",
    buttonText,
    children,
    ...otherProps
  }: DefaultButtonProps,
  ref) {

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
        {children}
      </Styled.BaseButton>
    );
  }
);

// export function DefaultButton({
//   iconName = undefined,
//   iconWeight = "bold",
//   iconSize = 16,
//   type = "button",
//   buttonText,
//   children,
//   ...otherProps
// }: DefaultButtonProps) {
//   return (
//     <Styled.BaseButton type={type} {...otherProps}>
//       {iconName && (
//         <InsertIcon
//           iconName={iconName}
//           iconWeight={iconWeight}
//           iconSize={iconSize}
//         />
//       )}
//       {buttonText}
//       {children}
//     </Styled.BaseButton>
//   );
// }