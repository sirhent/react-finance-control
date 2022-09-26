import {
  Activity,
  ArrowClockwise,
  Bell,
  CaretCircleLeft,
  CaretDown,
  CaretLeft,
  CaretRight,
  ChatTeardropText,
  Check,
  CheckCircle,
  CircleWavyCheck,
  CopySimple,
  CurrencyCircleDollar,
  CurrencyDollar,
  DownloadSimple,
  GearSix,
  GlobeHemisphereWest,
  GoogleLogo,
  Handshake,
  IconWeight,
  Info,
  Keyboard,
  ListBullets,
  MagnifyingGlass,
  PencilSimple,
  Prohibit,
  Question,
  Shield,
  ShieldCheck,
  SunDim,
  Translate,
  User,
  X,
} from "phosphor-react";

export interface RenderableIconList {
  iconName:
    | "Activity"
    | "ArrowClockwise"
    | "Bell"
    | "CaretCircleLeft"
    | "CaretDown"
    | "CaretLeft"
    | "CaretRight"
    | "ChatTeardropText"
    | "Check"
    | "CheckCircle"
    | "CircleWavyCheck"
    | "CopySimple"
    | "CurrencyCircleDollar"
    | "CurrencyDollar"
    | "DownloadSimple"
    | "GearSix"
    | "GlobeHemisphereWest"
    | "GoogleLogo"
    | "Handshake"
    | "Info"
    | "Keyboard"
    | "ListBullets"
    | "MagnifyingGlass"
    | "PencilSimple"
    | "Prohibit"
    | "Question"
    | "Shield"
    | "ShieldCheck"
    | "SunDim"
    | "Translate"
    | "User"
    | "X";
}

export interface InsertIconProps extends RenderableIconList {
  iconWeight: undefined | IconWeight;
  iconSize: undefined | number;
}

export function InsertIcon(props: InsertIconProps) {
  switch (props.iconName) {
    case "Activity":
      return <Activity weight={props.iconWeight} size={props.iconSize} />;
    case "ArrowClockwise":
      return <ArrowClockwise weight={props.iconWeight} size={props.iconSize} />;

    case "Bell":
      return <Bell weight={props.iconWeight} size={props.iconSize} />;

    case "CaretCircleLeft":
      return (
        <CaretCircleLeft weight={props.iconWeight} size={props.iconSize} />
      );

    case "CaretDown":
      return <CaretDown weight={props.iconWeight} size={props.iconSize} />;

    case "CaretLeft":
      return <CaretLeft weight={props.iconWeight} size={props.iconSize} />;

    case "CaretRight":
      return <CaretRight weight={props.iconWeight} size={props.iconSize} />;

    case "ChatTeardropText":
      return (
        <ChatTeardropText weight={props.iconWeight} size={props.iconSize} />
      );

    case "Check":
      return <Check weight={props.iconWeight} size={props.iconSize} />;

    case "CheckCircle":
      return <CheckCircle weight={props.iconWeight} size={props.iconSize} />;

    case "CopySimple":
      return <CopySimple weight={props.iconWeight} size={props.iconSize} />;

    case "CircleWavyCheck":
      return (
        <CircleWavyCheck weight={props.iconWeight} size={props.iconSize} />
      );

    case "CurrencyCircleDollar":
      return (
        <CurrencyCircleDollar weight={props.iconWeight} size={props.iconSize} />
      );

    case "CurrencyDollar":
      return <CurrencyDollar weight={props.iconWeight} size={props.iconSize} />;

    case "DownloadSimple":
      return <DownloadSimple weight={props.iconWeight} size={props.iconSize} />;

    case "GearSix":
      return <GearSix weight={props.iconWeight} size={props.iconSize} />;

    case "GlobeHemisphereWest":
      return (
        <GlobeHemisphereWest weight={props.iconWeight} size={props.iconSize} />
      );

    case "GoogleLogo":
      return <GoogleLogo weight={props.iconWeight} size={props.iconSize} />;

    case "Handshake":
      return <Handshake weight={props.iconWeight} size={props.iconSize} />;

    case "Info":
      return <Info weight={props.iconWeight} size={props.iconSize} />;

    case "Keyboard":
      return <Keyboard weight={props.iconWeight} size={props.iconSize} />;

    case "ListBullets":
      return <ListBullets weight={props.iconWeight} size={props.iconSize} />;

    case "MagnifyingGlass":
      return (
        <MagnifyingGlass weight={props.iconWeight} size={props.iconSize} />
      );

    case "PencilSimple":
      return <PencilSimple weight={props.iconWeight} size={props.iconSize} />;

    case "Prohibit":
      return <Prohibit weight={props.iconWeight} size={props.iconSize} />;

    case "Question":
      return <Question weight={props.iconWeight} size={props.iconSize} />;

    case "Shield":
      return <Shield weight={props.iconWeight} size={props.iconSize} />;

    case "ShieldCheck":
      return <ShieldCheck weight={props.iconWeight} size={props.iconSize} />;

    case "SunDim":
      return <SunDim weight={props.iconWeight} size={props.iconSize} />;

    case "Translate":
      return <Translate weight={props.iconWeight} size={props.iconSize} />;

    case "User":
      return <User weight={props.iconWeight} size={props.iconSize} />;

    case "X":
      return <X weight={props.iconWeight} size={props.iconSize} />;

    // no default
  }
}
