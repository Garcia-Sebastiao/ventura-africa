import home from "../en/home.json";
import { useTranslations } from "next-intl";
import { ExtractRecursiveKeys } from "../utils/messages";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof home>;

export function useHomeDictionary() {
  const translation = useTranslations();

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
