export type SectionId = 'hero' | 'projects' | 'experience' | 'contact';

export interface FocusTarget {
  id: string; // DOM id
  section: SectionId;
  row: number; // vertical index within section
  col: number; // horizontal index within the row
}

export const focusTargets: FocusTarget[] = [
  {
    id: 'hero-cta',
    section: 'hero',
    row: 0,
    col: 0,
  },
  // TODO: add project cards, experience items, and contact controls here
];
