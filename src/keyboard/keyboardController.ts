import type { Lang } from '../i18n/i18n';
import type { SectionId } from './focusMap';

export interface KeyboardNavState {
  section: SectionId;
  targetId: string;
  lang: Lang;
}

export interface KeyboardNavOptions {
  initialState: KeyboardNavState;
  onLangChange: (lang: Lang) => void;
}

export function initKeyboardNavigation({ initialState, onLangChange }: KeyboardNavOptions) {
  let state = { ...initialState };

  function focusElement(id: string) {
    const el = document.getElementById(id);
    if (el instanceof HTMLElement) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    // Language toggle: L or Shift+L
    if (event.key.toLowerCase() === 'l') {
      event.preventDefault();
      state.lang = state.lang === 'en' ? 'es' : 'en';
      onLangChange(state.lang);
      return;
    }

    // TODO: implement section navigation (ArrowUp/ArrowDown),
    // in-section navigation (ArrowLeft/ArrowRight),
    // and numeric shortcuts (1..9) based on the focus map.

    if (event.key === 'Enter') {
      // Let the browser activate the currently focused element.
      return;
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  focusElement(state.targetId);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}
