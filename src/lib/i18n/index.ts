import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUSJson from "./translations/enUS.json";
import ptBRJson from "./translations/ptBR.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBR: ptBRJson,
    enUS: enUSJson,
  },
});

export default i18n;