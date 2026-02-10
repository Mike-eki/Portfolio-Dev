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
  let currentFocusIndex = 0;

  // Get all focusable elements dynamically
  function getFocusableElements(): HTMLElement[] {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');
    
    return Array.from(document.querySelectorAll<HTMLElement>(selectors))
      .filter(el => {
        // Filter out hidden elements
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
  }

  // Get section elements
  function getSections(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
  }

  function focusElement(element: HTMLElement) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function navigateToSection(sectionIndex: number) {
    const sections = getSections();
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      const section = sections[sectionIndex];
      state.section = section.id as SectionId;
      
      // Scroll to the top of the section
      const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
      const bannerHeight = document.getElementById('keyboard-guide-banner')?.classList.contains('hidden') 
        ? 0 
        : (document.getElementById('keyboard-guide-banner')?.offsetHeight || 0);
      const targetPosition = section.offsetTop - navHeight - bannerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  function getCurrentSectionIndex(): number {
    const sections = getSections();
    return sections.findIndex(s => s.id === state.section);
  }

  function handleKeyDown(event: KeyboardEvent) {
    // Ignore if modal is open
    const modal = document.getElementById('project-modal');
    if (modal && !modal.classList.contains('hidden')) {
      return; // Let modal handle its own keyboard events
    }
    
    // Ignore if user is typing in an input/textarea
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      // Allow language toggle even in inputs
      if (event.key.toLowerCase() !== 'l') {
        return;
      }
    }

    const focusableElements = getFocusableElements();
    const sections = getSections();

    // Language toggle: L or Shift+L
    if (event.key.toLowerCase() === 'l') {
      event.preventDefault();
      state.lang = state.lang === 'en' ? 'es' : 'en';
      onLangChange(state.lang);
      return;
    }

    // Numeric shortcuts (1-9) for direct section navigation
    if (event.key >= '1' && event.key <= '9') {
      event.preventDefault();
      const sectionIndex = parseInt(event.key) - 1;
      navigateToSection(sectionIndex);
      return;
    }

    // Arrow key navigation - only for elements within sections
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        // Navigate to previous focusable element in current section
        const currentSectionPrev = sections[getCurrentSectionIndex()];
        if (currentSectionPrev) {
          const focusablesInSectionPrev = focusableElements.filter(el => 
            currentSectionPrev.contains(el)
          );
          const indexInSectionPrev = focusablesInSectionPrev.indexOf(document.activeElement as HTMLElement);
          
          if (indexInSectionPrev > 0) {
            const prevElement = focusablesInSectionPrev[indexInSectionPrev - 1];
            focusElement(prevElement);
            currentFocusIndex = focusableElements.indexOf(prevElement);
          } else if (indexInSectionPrev === -1 && focusablesInSectionPrev.length > 0) {
            // If nothing focused, focus first element
            focusElement(focusablesInSectionPrev[0]);
            currentFocusIndex = focusableElements.indexOf(focusablesInSectionPrev[0]);
          }
        }
        break;

      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        // Navigate to next focusable element in current section
        const currentSectionNext = sections[getCurrentSectionIndex()];
        if (currentSectionNext) {
          const focusablesInSectionNext = focusableElements.filter(el => 
            currentSectionNext.contains(el)
          );
          const indexInSectionNext = focusablesInSectionNext.indexOf(document.activeElement as HTMLElement);
          
          if (indexInSectionNext >= 0 && indexInSectionNext < focusablesInSectionNext.length - 1) {
            const nextElement = focusablesInSectionNext[indexInSectionNext + 1];
            focusElement(nextElement);
            currentFocusIndex = focusableElements.indexOf(nextElement);
          } else if (indexInSectionNext === -1 && focusablesInSectionNext.length > 0) {
            // If nothing focused, focus first element
            focusElement(focusablesInSectionNext[0]);
            currentFocusIndex = focusableElements.indexOf(focusablesInSectionNext[0]);
          }
        }
        break;

      case 'Enter':
        // Let the browser activate the currently focused element
        break;
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  
  // Initial focus only if targetId is provided
  if (state.targetId) {
    const initialElement = document.getElementById(state.targetId);
    if (initialElement) {
      focusElement(initialElement);
    }
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}
