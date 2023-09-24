# [`@packlify/config-format`](https://packlify.com/config-format)
Part of the Packlify Web SDK ecosystem, `@packlify/config-format` is a package that manages code formatting using Prettier and additional plugins. It comes with command line utilities to both check and write code formats.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [TypeScript (ESM)](#typescript-esm)
    - [`packlify-format-check`](#packlify-format-check)
    - [`packlify-format-write`](#packlify-format-write)
- [Prettier Configuration](#prettier-configuration)
- [Contact](#contact)

## Installation

Install the package using npm or yarn:

```sh
npm install @packlify/config-format
```

## Features

`@packlify/config-format` offers:

- Command line utilities for format checking and writing.
- Shared Prettier configuration to enforce consistent styling.
- Support for sorting import statements using a Prettier plugin.
- A vibrant and informative console output using `chalk`.

## Dependencies

The package relies on the following key dependencies:

- `chalk`: For colored console output.
- `prettier`: For code formatting.
- Additional Prettier plugins for specialized formatting.

## Usage

### TypeScript (ESM)

The package provides two CLI utilities: `packlify-format-check` and `packlify-format-write`.

#### `packlify-format-check`

The CLI utility checks for code formatting issues. It scans `.js`, `.jsx`, `.ts`, and `.tsx` files within the `src` folder:

```sh
npx packlify-format-check
```

#### `packlify-format-write`

This CLI utility writes the code formatting fixes to `.js`, `.jsx`, `.ts`, and `.tsx` files within the `src` folder:

```sh
npx packlify-format-write
```

## Prettier Configuration

The package comes with a pre-configured Prettier setup, specified in `prettier.config.cjs`. The following rules are set by default:

- `trailingComma`: `'es5'`
- `printWidth`: `120`
- `arrowParens`: `'avoid'`
- `singleQuote`: `true`
  
Additional rules related to import sorting are also configured.

```javascript
const prettierConfig = require('@packlify/config-format/prettier.config.cjs');

module.exports = {
  ...config,
  // ...You can add here also your configurations
};
```

## Contact
Lucas Farias
lukf95@gmail.com
[LinkedIn](https://www.linkedin.com/in/lucasfar/) - [GitHub](https://www.github.com/lucasfarias2)
