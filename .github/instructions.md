## React Resume App Setup Instructions

This project uses React 19.2 and TypeScript to render a resume from JSON data hosted on GitHub. Follow these steps to set up and run the app:

### 1. Install Dependencies

Navigate to the `src/` folder and run:

```sh
npm install
```

### 2. Start Development Server

```sh
npm run dev
```

### 3. How It Works

- The app fetches your resume JSON from a GitHub URL using the fetch API and React 19.2's `use()` hook for async data loading.
- The Resume component renders sections like education, experience, and skills from the JSON.
- Accessibility and semantic HTML are used throughout.

### 4. Customizing Resume Data

- Update the GitHub JSON URL in the Resume component to point to your own resume data.
- Edit the Resume component to change layout or styling as needed.

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
