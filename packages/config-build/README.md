# [`@packlify/config-build`](https://packlify.com/config-build)
Part of the Packlify Web SDK ecosystem, `@packlify/config-build` assists you in generating optimized Vite configurations for your React-based projects, both client-side and server-side rendering (SSR) included.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Peer Dependencies](#peer-dependencies)
- [Usage](#usage)
  - [TypeScript (ESM)](#typescript-esm)
    - [Client Configuration](#client-configuration)
    - [SSR Configuration](#ssr-configuration)
- [API](#api)
  - [`viteConfigClient`](#viteconfigclient)
  - [`viteConfigSsr`](#viteconfigssr)
- [Contact](#contact)

## Installation

Install the package using npm or yarn:

```sh
npm install @packlify/config-build
```

## Features

`@packlify/config-build` offers the following features:

- Dynamic Vite configuration generation based on provided entry points.
- TypeScript path aliasing via `vite-tsconfig-paths`.
- Configures output directories and source maps automatically.

## Peer Dependencies

Ensure you have the following peer dependencies installed:

```sh
npm install react react-dom react-router-dom
```

## Usage

### TypeScript (ESM)

Firstly, import the required functions:

```typescript
import { viteConfigClient, viteConfigSsr } from '@packlify/config-build';
```

#### Client Configuration

To generate the Vite configuration for client-side rendering, use `viteConfigClient`. It takes an array of entry points:

```typescript
import { viteConfigClient } from '@packlify/config-build';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfigClient([{ name: 'home', path: '/src/client/entries/home/home.html' }]),
});

```

#### SSR Configuration

For server-side rendering, `viteConfigSsr` can be employed. It also requires an array of entry points:

```typescript
const ssrConfig = viteConfigSsr([
  { name: 'home', path: './src/server/entries/home/index.tsx' },
  { name: 'about', path: './src/server/entries/about/index.tsx' },
]);
```

## API

### `viteConfigClient`

```typescript
function viteConfigClient(entryPoints: IEntryPoint[]): ReturnType<typeof defineConfig>;
```

#### Parameters
- `entryPoints`: An array of entry points, each being an object with `name` and `path` properties.

### `viteConfigSsr`

```typescript
function viteConfigSsr(entryPoints: IEntryPoint[]): ReturnType<typeof defineConfig>;
```

#### Parameters
- `entryPoints`: An array of entry points, each being an object with `name` and `path` properties.

## Contact
Lucas Farias
lukf95@gmail.com
[LinkedIn](https://www.linkedin.com/in/lucasfar/) - [GitHub](https://www.github.com/lucasfarias2)
