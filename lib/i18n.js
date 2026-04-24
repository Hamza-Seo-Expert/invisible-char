import en from '@/locales/en.json';
import es from '@/locales/es.json';
import pt from '@/locales/pt.json';
import ar from '@/locales/ar.json';
import id from '@/locales/id.json';
import br from '@/locales/br.json';
import fr from '@/locales/fr.json';
import ru from '@/locales/ru.json';
import de from '@/locales/de.json';
import tr from '@/locales/tr.json';
import it from '@/locales/it.json';
import vi from '@/locales/vi.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import pl from '@/locales/pl.json';

const translations = { en, es, pt, ar, id, br, fr, ru, de, tr, it, vi, ja, ko, pl };

// Maps each language code to its localized URL slug for the main tool page.
// These must exactly match the URL slugs listed in the routing requirements.
export const langSlugs = {
  en: 'invisible-character',
  es: 'caracter-invisible',
  id: 'teks-kosong',
  br: 'caractere-invisivel',
  fr: 'caractere-invisible',
  ru: 'invisible-symbol',
  de: 'unsichtbares-zeichen',
  tr: 'invisible-letter',
  it: 'carattere-invisibile',
  vi: 'space-character',
  ja: 'blank-character',
  ar: 'invisible-character',
  ko: 'blank-characters',
  pl: 'niewidzialny-znak',
};

export const supportedLangs = Object.keys(langSlugs);

// Languages that read right-to-left
export const rtlLangs = ['ar'];

export function getTranslations(lang) {
  return translations[lang] || translations['en'];
}

export function isRTL(lang) {
  return rtlLangs.includes(lang);
}

export function getLangSlug(lang) {
  return langSlugs[lang] || langSlugs['en'];
}

export function getLangName(lang) {
  const names = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
    br: 'Português (BR)',
    ar: 'العربية',
    id: 'Bahasa Indonesia',
    fr: 'Français',
    ru: 'Русский',
    de: 'Deutsch',
    tr: 'Türkçe',
    it: 'Italiano',
    vi: 'Tiếng Việt',
    ja: '日本語',
    ko: '한국어',
    pl: 'Polski',
  };
  return names[lang] || lang;
}
