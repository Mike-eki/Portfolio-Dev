import { en, type EnDict } from './en';
import { es, type EsDict } from './es';

export type Lang = 'en' | 'es';

export type Dict = EnDict & EsDict;

const dictionaries: Record<Lang, Dict> = {
  en: en as Dict,
  es: es as Dict,
};

export const DEFAULT_LANG: Lang = 'en';
export const SUPPORTED_LANGS: Lang[] = ['en', 'es'];

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LANG];
}
