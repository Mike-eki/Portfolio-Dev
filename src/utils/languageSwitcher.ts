import type { Lang } from '../i18n/i18n';

export interface Translations {
  [key: string]: any;
}

/**
 * Language Switcher Utility
 * Handles client-side language switching without page reload
 */
export class LanguageSwitcher {
  private currentLang: Lang;
  private translations: Translations;
  private onChangeCallbacks: ((lang: Lang) => void)[] = [];

  constructor(initialLang: Lang, translations: Translations) {
    this.currentLang = initialLang;
    this.translations = translations;
  }

  /**
   * Get current language
   */
  getLang(): Lang {
    return this.currentLang;
  }

  /**
   * Register a callback for language changes
   */
  onChange(callback: (lang: Lang) => void): void {
    this.onChangeCallbacks.push(callback);
  }

  /**
   * Switch to a new language
   */
  switchTo(newLang: Lang): void {
    if (this.currentLang === newLang) return;
    
    this.currentLang = newLang;
    const t = this.translations[newLang];
    
    // Update document metadata
    this.updateDocumentMeta(t);
    
    // Update all content sections
    this.updateNavigation(t);
    this.updateKeyboardGuide(t);
    this.updateHero(t);
    this.updateProjects(t);
    this.updateContact(t);
    this.updateLangButton();
    
    // Save preference
    localStorage.setItem('preferredLang', newLang);
    
    // Trigger callbacks
    this.onChangeCallbacks.forEach(cb => cb(newLang));
  }

  /**
   * Toggle between available languages
   */
  toggle(): void {
    const newLang: Lang = this.currentLang === 'en' ? 'es' : 'en';
    this.switchTo(newLang);
  }

  /**
   * Initialize from saved preference or browser language
   */
  initFromPreference(): void {
    const savedLang = localStorage.getItem('preferredLang') as Lang;
    const browserLang = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
    const initialLang = savedLang || browserLang;
    
    if (initialLang !== this.currentLang) {
      this.switchTo(initialLang);
    }
  }

  // Private update methods
  
  private updateDocumentMeta(t: any): void {
    document.documentElement.lang = this.currentLang;
    document.title = t.common.siteTitle;
  }

  private updateNavigation(t: any): void {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    t.nav.items.forEach((item: any, index: number) => {
      const link = navLinks[index];
      if (link) {
        const labelSpan = link.querySelector('span:last-child');
        if (labelSpan) labelSpan.textContent = item.label;
      }
    });
  }

  private updateKeyboardGuide(t: any): void {
    const titleSpan = document.querySelector('#keyboard-guide-banner .text-sky-400 span:last-child');
    if (titleSpan) titleSpan.textContent = t.keyboardGuide.title;
    
    const shortcuts = document.querySelectorAll('#keyboard-guide-banner [class*="text-[10px]"]');
    t.keyboardGuide.shortcuts.forEach((shortcut: any, index: number) => {
      if (shortcuts[index]) {
        shortcuts[index].textContent = shortcut.description;
      }
    });
  }

  private updateHero(t: any): void {
    const eyebrow = document.querySelector('.text-sm.uppercase.tracking-\\[0\\.2em\\]');
    if (eyebrow) eyebrow.textContent = t.hero.eyebrow;
    
    const title = document.querySelector('h1');
    if (title) title.textContent = t.hero.title;
    
    const subtitle = document.querySelector('section#hero .max-w-xl');
    if (subtitle) subtitle.textContent = t.hero.subtitle;
    
    const ctaSpan = document.querySelector('#hero-cta span');
    if (ctaSpan) ctaSpan.textContent = t.hero.ctaContact;
  }

  private updateProjects(t: any): void {
    const heading = document.querySelector('#projects h2');
    if (heading) heading.textContent = t.projects.heading;
    
    const intro = document.querySelector('#projects .max-w-2xl');
    if (intro) intro.textContent = t.projects.intro;
    
    // Update project cards
    const projectCards = document.querySelectorAll('[data-project-card]');
    t.projects.cards.forEach((project: any, index: number) => {
      const card = projectCards[index];
      if (!card) return;
      
      const cardTitle = card.querySelector('h3');
      if (cardTitle) cardTitle.textContent = project.name;
      
      const cardRole = card.querySelector('.text-xs.uppercase.tracking-wide');
      if (cardRole) cardRole.textContent = project.role;
      
      const cardSummary = card.querySelector('.text-sm.text-slate-300');
      if (cardSummary) cardSummary.textContent = project.summary;
      
      // Update button labels
      const buttons = card.querySelectorAll('a span, button span');
      if (buttons.length >= 3) {
        const githubBtn = buttons[0];
        const liveBtn = buttons[1];
        const detailsBtn = buttons[2];
        
        if (githubBtn) githubBtn.textContent = 'GitHub';
        if (liveBtn) liveBtn.textContent = this.currentLang === 'en' ? 'Live demo' : 'Demo en vivo';
        if (detailsBtn) detailsBtn.textContent = this.currentLang === 'en' ? 'View details' : 'Ver detalles';
      }
    });
    
    // Update modal case study labels
    const modalLabels = document.querySelectorAll('#project-modal h3.uppercase');
    const caseStudyKeys = ['problem', 'requirements', 'decisions', 'technologies', 'approach', 'results'];
    caseStudyKeys.forEach((key, index) => {
      if (modalLabels[index] && t.projects.caseStudyStructure[key]) {
        modalLabels[index].textContent = t.projects.caseStudyStructure[key];
      }
    });
  }

  private updateContact(t: any): void {
    const heading = document.querySelector('#contact h2');
    if (heading) heading.textContent = t.contactSection.heading;
    
    const intro = document.querySelector('#contact > header > .max-w-2xl');
    if (intro) intro.textContent = t.contactSection.intro;
    
    // Update copy button text based on language
    const copyText = document.getElementById('copy-text');
    if (copyText && !copyText.textContent?.includes('Copied') && !copyText.textContent?.includes('Failed')) {
      copyText.textContent = this.currentLang === 'en' ? 'Copy' : 'Copiar';
    }
  }

  private updateLangButton(): void {
    const langButton = document.getElementById('lang-switcher');
    if (!langButton) return;
    
    langButton.textContent = this.currentLang === 'en' ? 'ES' : 'EN';
    langButton.setAttribute('aria-label', 
      this.currentLang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'
    );
  }
}
