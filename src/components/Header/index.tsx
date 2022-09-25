import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hello")}</h1>
    </div>
  );
}