## React Resume App Setup & Features

This project is a modern React 19.2 + TypeScript resume app that renders your resume from modular JSON files (experience, skills, education, certifications, hobbies, basics) and supports interactive UI features. It is styled with Tailwind CSS and designed for accessibility and maintainability.

### 1. Install Dependencies

Navigate to the project root and run:

```sh
npm install
```

### 2. Start Development Server

```sh
npm run dev
```

### 3. Features & How It Works

- Modular JSON data: All resume sections (experience, skills, education, certifications, hobbies, basics) are loaded from local or remote JSON files.
- Interactive PrintActionsBar: Floating menu for WhatsApp, cover letter, message template, print, and PDF compress (hidden on print).
- Responsive, accessible layout: Semantic HTML, ARIA attributes, and keyboard navigation.
- Tailwind CSS for styling: Modern, clean look with utility classes. Dark mode has been removed for simplicity.
- Skills: Rendered as bullet points, 4-column layout, skill name bold, years separated by dash.
- Achievements: Consistent object model (title, description) for all companies.
- Certifications: Interactive icons and hover effects.
- Hobbies: Short, concise entries with title and description.
- Print-optimized: PrintActionsBar is hidden when printing.
- Error handling: Components show loading and error states for data fetches.

### 4. Customizing Resume Data

- Update the JSON files in `public/` or point to your own hosted JSON URLs.
- Edit components in `src/components/` to change layout, add features, or adjust styling.

### 5. Code Quality

- ESLint and Prettier are included for code formatting and linting.

### 6. Build for Production

```sh
npm run build
```

### 7. Modern React Features Used

- React 19.2 hooks: `use()`, Suspense for async data
- Accessibility: semantic HTML, ARIA attributes
- TypeScript for type safety

---

For more details, see the README.md or source files in `src/`.
