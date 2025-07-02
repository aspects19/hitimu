# Contributing to Hitimu


 All contributions are **welcome**. <br>
 Whether you're fixing a bug, adding a new feature, or improving the documentation,
Designs contributions are also welcome.<br>

---

## 🚀 Workflow Conventions

- Use feature branches (`feat/login-page`, `fix/navbar-glitch`) for development.
- Always create a Pull Request (PR) into the `main` branch.
- Keep PRs focused and under 300 lines if possible.
- Reference related issues in PRs (e.g., `Closes #42`).
- PRs require at least one approval before merging.
- Run `npm run lint`, `npm run prettier` and `npm run test` before pushing.
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):  
  Example: `feat(auth): add Google login support`

---

## 🧱 Code Style & Constraints

- Use [Prettier](https://prettier.io) and [ESLint](https://eslint.org/) — config is already included.
- Indentation: 2 spaces
- Prefer `const` over `let` unless reassignment is necessary.
- Avoid using `any` in TypeScript — be explicit with types.
- Keep components/functions under ~100 lines. Break them down if too long.
- No inline styles. Use CSS modules or Tailwind CSS (as configured).
- All code must pass TypeScript checks (`tsc`).

---

## 🧪 Testing

- All new features must include tests (unit or integration).
- Use [Jest](https://jestjs.io/) for unit tests.
- Run `npm test` locally before pushing.

---

## 📝 Documentation

- Update the README if you add or change functionality.
- Add code comments for complex logic.

---


## 🤝 Code of Conduct

By participating in this project, you agree to adhere to the [Code of Conduct](https://github.com/aspects19/CODE_OF_CONDUCT.md).

----

## How to Contribute

### 1. Fork the repository

- Go to the repository page and click the "Fork" button at the top right.

### 2. Clone the repository

- Clone your fork to your local machine using:
- **Make sure you replace YOUR-USERNAME with your github username**
  
```sh
git clone https://github.com/YOUR-USERNAME/hitimu
```

### 3. Create a new branch

- Create a new branch for your feature or fix:
  
```sh
git checkout -b your-branch-name
```

### 4. Make your changes

- Make your changes and write clear, concise commit messages.
- If you’re fixing a bug or adding a feature, please ensure you write tests where applicable.

### 5. Commit your changes

- Stage and commit your changes.

```sh
  git add .
  git commit -m "Description of your changes"
```

### 6. Push your fork

- Push your changes back to your fork on GitHub:

```sh
  git push origin your-branch-name
```

### 7 Create a pull request

- Open a pull request against the main branch of the repository with a description of the changes you've made.

---

## Reporting Issues

If you encounter any bugs or issues, please open an issue on the Issues page. Be sure to include the steps to reproduce and any relevant information, such as your environment and error messages.

--- 

## Questions?

Feel free to ask questions via the issues section or reach out if you need any help getting started with the project!

