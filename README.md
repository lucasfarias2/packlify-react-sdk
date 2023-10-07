<img width="200" alt="Screenshot 2023-10-01 at 22 45 10" src="https://github.com/shopinpack/packlify-web/assets/19575942/1b5d6acb-5b71-4244-803d-7c5748b51e00">

# Packlify Web SDK
Open source package of front-end tools for product web development.

- [packlify.com](https://packlify.com)
- Status: Early alpha.
- PLEASE: Leave any feedback as its highly appreciated.

## Table of Contents

- [Description](#description)
- [Stack](#stack)
- [Getting Started](#getting-started)
- [Packages](#packages)
  - [@packlify/core](#packlifycore)
  - [@packlify/client](#packlifyclient)
  - [@packlify/config-build](#packlifyconfig-build)
  - [@packlify/config-format](#packlifyconfig-format)
  - [@packlify/mocks](#packlifymocks)
  - @packlify/testing (coming soon)
  - @packlify/performance (coming soon)
  - @packlify/analytics (coming soon)
  - @packlify/monitoring (coming soon)
  - [eslint-config-packlify](#eslint-config-packlify)
  - [packlify-start-app](#packlify-start-app)
- [Contact](#contact)


## Description
This app is intended for creating multiple react projects under the same highly customizable and scalable architecture without the need of repeating boilerplate. More info about Packlify's modules [here](https://github.com/shopinpack/packlify-web).

## Stack
- React
- Typescript
- Isomorphic structure (Server, client, shared, api) (Packlify server)
- Vite + Vite SSR + Dev server (Packlify config build)
- Client hydration (Packlify client)
- ESLint + Prettier (Packlify eslint and config format)
- Tailwind CSS
- Nvm & nodemon

## Getting started
You can either use the `packlify-start-app` command or add the modules progressively.

```
npx packlify-start-app
```
Or
```
npm install @packlify/core @packlify/client @packlify/config-build @packlify/config-format eslint-config-packlify
```


## Packages
### [@packlify/core](https://github.com/shopinpack/packlify-web/tree/main/packages/core)
This package includes functions for setting up:
- `createServer`: Wrapper of **Express** + **Vite** dev server.
  - `device`: Add device type to **Express** requests to tell if its **Mobile** or **Desktop** using a regex on user agent.
  - `renderView`: A custom function added to **Express** response to return a rendered **React** component/page.
- `renderComponent`: Custom wrapper of **renderToString** that also can add **React Router**.
- `types`: Required types for consumer front-end project.
#### Bin files:
- `packlify-server`: Starts production Express server.
- `packlify-dev-server`: Starts development server with Vite.
- `packliy-build-server`: Builds Express server with local Typescript config.

### [@packlify/client](https://github.com/shopinpack/packlify-web/tree/main/packages/client)
This package includes functions for setting up:
- `hydrate`: Custom wrapper of React's hydrate function adding extra things such as taking **Preloaded state** from Window object and adding **React Router**.
#### Bin files:
- `packlify-build-client`: Builds client-side React code.
- `packlify-build-ssr`: Builds server-side React code.

### [@packlify/config-build](https://github.com/shopinpack/packlify-web/tree/main/packages/config-build)
This package includes functions for setting up:
- `viteConfigClient`: Custom Vite configuration for client-side React.
- `viteConfigSsr`: Custom Vite configuration for server-side React.


### [@packlify/config-format](https://github.com/shopinpack/packlify-web/tree/main/packages/config-format)
This package includes functions for setting up:
- `prettier.config.cjs`: Custom Prettier configuration.
#### Bin files:
- `packlify-format-check`: Runs Prettier checks (only check).
- `packlify-format-write`: Runs Prettier checks and fix errors.

### [@packlify/config-format](https://github.com/shopinpack/packlify-web/tree/main/packages/mocks)
This package includes functions for setting up:
- `mocks-adapter`: Custom adapter to mock browser and server side requests into json files.
- `mocks-middleware`: Custom middleware router to handle filesystem for creating and reading files.
 
### [eslint-config-packlify](https://github.com/shopinpack/packlify-web/tree/main/packages/eslint-config-packlify)
This package includes functions for setting up:
- `.eslintrc.cjs`: Custom ESLint configuration. Uses: rushstack/eslint-patch/modern-module-resolution for avoiding needing to install eslint dependencies on consumer project.
#### Bin files:
- `packlify-lint`: Runs ESLint checks (only check).


### [packlify-start-app](https://github.com/shopinpack/packlify-web/tree/main/packages/start-app)
This package includes functions for setting up:
#### Bin files:
- `packlify-start-app`: Creates a project folder with pre-set React frontend app using Packlify's modules.

## Contact
Lucas Farias
lukf95@gmail.com
[LinkedIn](https://www.linkedin.com/in/lucasfar/) - [GitHub](https://www.github.com/lucasfarias2)
