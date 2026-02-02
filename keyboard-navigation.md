# Keyboard Navigation Specification & Focus Map

## Purpose

This document defines how users can navigate the portfolio **using only the keyboard**, ensuring accessibility, usability, and a smooth user experience.

Keyboard navigation is an enhancement and does not replace standard browser behavior.

---

## Navigation Levels

Keyboard navigation is divided into **four levels**:
1. Global section navigation
2. In-section navigation
3. Action & selection
4. Global shortcuts

---

## 1. Global Section Navigation

### Keys
- `Arrow Up` → Navigate to previous section
- `Arrow Down` → Navigate to next section
- `1...9` → Jump directly to a section based on visual order

### Rules
- Sections are indexed starting at `1`
- Pressing a number navigates to the corresponding section
- If a section does not exist, no action is taken
- On section change:
  - Smooth scroll is triggered
  - Focus moves to the first interactive element in the section
  - Current language and state are preserved

---

## 2. In-Section Navigation

### Keys
- `Arrow Up` / `Arrow Down`  
  Navigate vertically between content blocks
- `Arrow Left` / `Arrow Right`  
  Navigate horizontally between elements at the same hierarchy level

### Rules
- Focus remains within the current section
- Focus never disappears
- If no element exists in the pressed direction, focus does not change

---

## 3. Action & Selection

### Key
- `Enter`

### Behavior
- Activates the currently focused element
- Opens links, project details, or triggers actions

---

## 4. Global Shortcuts

### Language Switching
- `L` or `Shift + L`
  - Toggles between available languages

### Rules
- Language change does not reset navigation
- Focus remains on the current element if available
- Visual feedback must confirm the language change

---

## Focus Map (Conceptual)

```text
GLOBAL
└── Section 1 (Hero / About)
    └── Primary CTA
└── Section 2 (Projects)
    ├── Project Card 1
    │   ├── View Details
    │   └── GitHub
    ├── Project Card 2
    └── ...
└── Section 3 (Experience)
└── Section 4 (Contact)
    ├── Email Link
    └── Submit Button

### UX & Accessibility Notes

- Focus states must always be visible
- Keyboard shortcuts should not conflict with native browser shortcuts
- Optional hint or help section may explain available shortcuts
- System must degrade gracefully if JavaScript is disabled

### Final Notes

- This keyboard navigation system is designed to:
- Improve accessibility
- Provide an efficient navigation alternative
- Demonstrate attention to detail and user-centered design