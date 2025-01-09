# React + TypeScript + Vite


Enlace al proyecto: https://guitarshop3.netlify.app/

#### Índice

- Creando el proyecto con TypeScript
- Si ya tienes un proyecto de React con JavaScript y quieres migrar a TypeScript, tienes que hacer esto: 
-- La carpeta de *img* que está dentro de *public/* la copiamos y la pegamos
-- Eliminas el *src/* que ya tiene el nuevo proyecto y copias el de tu proyecto, quita los archivos *.tsx* pero lo que tienes que hacer es renombrarlos.
-- Aunque haya errores es porque en TypeScript no puede haber null, utilizamos Assertion not null y poniendole *!* en algunos lados le decimos a TypeScript que ese elemento no va a ser null.
- Pasar archivos jsx a tsx
- Ir tipando

-----------------------------


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
