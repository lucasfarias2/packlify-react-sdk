# @packlify/client

The `@packlify/client` module is a part of the Packlify Web SDK, designed to facilitate React hydration and client-side setups.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Bin Files](#bin-files)
- [Requirements](#requirements)
- [Contact](#contact)

## Installation

You can add this package to your project using npm:

```bash
npm install @packlify/client
```

## Features

This package provides:

- A `hydrate` function to simplify client-side hydration for React apps
- Built-in support for `react-router-dom`
- Command-line tools for building React code

## Usage

### JavaScript/TypeScript
To use the `hydrate` function in your React app:

```typescript
import { hydrate } from '@packlify/client';

// Your main component
import App from './App';

// Use the hydrate function
hydrate(App);

// Use it with React Router
hydrate(App, true);
```

### Bin Files
The package comes with two command-line tools:

- `packlify-build-ssr`: Builds server-side React code
- `packlify-build-client`: Builds client-side React code

Run the following to execute:

```bash
npx packlify-build-ssr
npx packlify-build-client
```

### Requirements
- Node.js
- React 18.2.0 or higher
- react-router-dom 6.15.0 or higher

## Contact
Lucas Farias
lukf95@gmail.com
[LinkedIn](https://www.linkedin.com/in/lucasfar/) - [GitHub](https://www.github.com/lucasfarias2)
