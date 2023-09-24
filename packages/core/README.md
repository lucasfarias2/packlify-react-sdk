# @packlify/core
A core module of the Packlify ecosystem, `@packlify/core` provides essential utilities and server-side logic for React-based applications.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Requirements](#requirements)
- [Contact](#contact)

## Installation
```bash
npm install @packlify/core
```

## Features

- Modular server-side rendering for React components.
- Device-type recognition middleware.
- Easy to configure with Vite and Express.
- Types for server-side and client-side logic.

## Usage

### Import and initialize server

To create an Express server:
```typescript
import { createServer } from '@packlify/core';

const app = await createServer();
```

### Use device-type recognition middleware

In your server-side logic:
```typescript
import deviceMiddleware from '@packlify/core/middleware/device';

app.use(deviceMiddleware);
```

### Render a React component

To render a component on the server-side:
```typescript
import { renderComponent } from '@packlify/core';

const htmlString = renderComponent({
  Component: YourReactComponent,
  url: '/your-url',
  props: { key: 'value' },
  withRouter: true,
});
```

### Commands
- `packlify-build-server`: Build server for production.
- `packlify-dev-server`: Run development server.
- `packlify-server`: Run production server.

## Requirements
- Node.js (+16)
- NPM or Yarn
- TypeScript (recommended)
- Vite
- Express

## Contact
Lucas Farias
lukf95@gmail.com
[LinkedIn](https://www.linkedin.com/in/lucasfar/) - [GitHub](https://www.github.com/lucasfarias2)
