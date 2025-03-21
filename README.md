# React Material UI Component Library with Vite

A modern, production-ready boilerplate for building component libraries using React, Material UI, and Vite. This monorepo demonstrates best practices for creating, testing, and publishing reusable UI components.

<p align="center">
  <img src="https://img.shields.io/badge/react-19.0.0-blue" alt="React">
  <img src="https://img.shields.io/badge/vite-6.1.0-yellow" alt="Vite">
  <img src="https://img.shields.io/badge/mui-6.4.7-purple" alt="Material UI">
  <img src="https://img.shields.io/badge/storybook-8.6.4-ff4785" alt="Storybook">
  <img src="https://img.shields.io/badge/typescript-5.7.3-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/pnpm-10.2.1-orange" alt="pnpm">
</p>

## 🌟 Features

- **Monorepo Architecture**: Uses pnpm workspaces to organize and manage multiple packages
- **Modern Build System**: Configured Vite for component library development and builds
- **Optimized Bundle**: Generates ESM modules with preserved structure for better tree-shaking
- **Type Safety**: Includes TypeScript configuration with type declarations generation
- **Component Development**: Integrates Storybook for isolated component testing and documentation
- **Theming System**: Provides Material UI theme setup with proper TypeScript support
- **Quality Assurance**: Configured ESLint, Prettier, and TypeScript validation
- **Local Testing**: Setup for Verdaccio to test packages before publishing
- **Containerization**: Docker configurations for various development and CI environments
- **CI/CD Ready**: Includes GitHub Actions workflow templates
- **Developer Experience**: Contains VS Code Dev Container for consistent development environment

## 📦 Package Structure

This monorepo contains the following packages:

```
├── packages/
│   ├── components/     # React UI component library with Material UI
│   └── icons/          # SVG icon components package
├── storybook/          # Storybook documentation and development environment
├── scripts/            # Build and publish scripts
└── .verdaccio/         # Local package registry configuration
```

### Components Package

The `@component-lib/components` package includes:

- React UI components based on Material UI
- Customizable theming system
- Type-safe component props

### Icons Package

The `@component-lib/icons` package includes:

- Custom SVG icons as React components
- Customizable icon styling
- Icon variants implementation

### Storybook

The Storybook package provides:

- Interactive component documentation
- Development environment for building and testing components
- Theme switching capability
- Component prop control and documentation

## 🚀 Getting Started

### Prerequisites

- Node.js v22.9.0 or later
- pnpm v10.2.1 or later

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:manuelcoca/sample-component-lib-react-vite.git
   cd sample-component-lib-react-vite
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Build all packages:

   ```bash
   pnpm all:build
   ```

4. Start Storybook:
   ```bash
   pnpm storybook
   ```

## 🧩 Development Workflow

### Using the Components Package

After building and publishing, you can use the components package in your application:

```jsx
import { Button } from '@component-lib/components';
import { mainTheme } from '@component-lib/components/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Button variant="contained">Click Me</Button>
    </ThemeProvider>
  );
}
```

### Creating New Components

1. Create a new component directory:

   ```
   packages/components/src/components/MyComponent/
   ```

2. Add component files:

   ```
   MyComponent.tsx     # Component implementation
   index.ts            # Component export
   ```

3. Export the component in the main index file:

   ```ts
   // packages/components/src/components/index.ts
   export * from './MyComponent';
   ```

4. Create a Storybook story:
   ```
   storybook/src/stories/MyComponent.stories.tsx
   ```

### Working with Themes

The component library includes a customizable theme system:

```jsx
import { createTheme } from '@mui/material/styles';
import { palette, typography, spacing } from '@component-lib/components/theme';

const customTheme = createTheme({
  palette: {
    ...palette,
    primary: {
      main: '#0088cc',
    },
  },
  typography,
  spacing,
});
```

## 📝 Available Scripts

### Root Workspace

- `pnpm storybook` - Start Storybook development server
- `pnpm storybook:build` - Build Storybook static site
- `pnpm all:build` - Build all packages
- `pnpm all:lint` - Lint all packages
- `pnpm all:typecheck` - Type check all packages
- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check if files are properly formatted

### Components Package

- `pnpm components:build` - Build the components package
- `pnpm components:build:analyze` - Build with bundle analysis
- `pnpm components:lint` - Lint the components package
- `pnpm components:typecheck` - Type check the components package
- `pnpm components:publish` - Publish to registry

### Icons Package

- `pnpm icons:build` - Build the icons package
- `pnpm icons:build:analyze` - Build with bundle analysis
- `pnpm icons:lint` - Lint the icons package
- `pnpm icons:typecheck` - Type check the icons package
- `pnpm icons:publish` - Publish to registry

## 🧪 Testing Package Locally

This repository uses Verdaccio as a local npm registry for testing packages before publishing to a public registry.

1. Start Verdaccio:

   ```bash
   pnpm verdaccio
   ```

2. Build and publish packages to local registry:

   ```bash
   pnpm components:build
   pnpm components:publish
   ```

3. In your test project, update `.npmrc` to use the local registry:

   ```
   registry=http://localhost:4873/
   ```

4. Install the package in your test project:
   ```bash
   npm install @component-lib/components
   ```

## 🐳 Docker Support

This repository includes Docker configurations for different purposes:

- `Dockerfile.Test` - For testing the component library in a CI environment
- `Dockerfile.Publish` - For building and publishing packages

### Testing with Docker

```bash
docker build -f Dockerfile.Test -t component-lib-test .
docker run component-lib-test
```

### Publishing with Docker

```bash
docker build -f Dockerfile.Publish -t component-lib-publish .
docker run component-lib-publish
```

## 🧰 Using Dev Container

For a consistent development environment, this repository includes a VS Code Dev Container configuration with all necessary tools and extensions.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Opening in Dev Container

1. Open the repository in VS Code
2. Click "Reopen in Container" when prompted
3. Wait for the container to build and initialize

## 📈 Advanced Topics

### Bundle Analysis

To analyze the bundle size and composition:

```bash
pnpm components:build:analyze
```

This will generate an interactive visualization in `packages/components/dist/stats/stats.html`.

### GitHub Actions Workflow

The repository includes a GitHub Actions workflow template for automated testing and publishing.

## 📄 License

This project is licensed under the MIT License, which means:

- It is completely free to use, modify, and distribute, including for commercial purposes
- You can use the code in proprietary software
- The only requirement is including the original license and copyright notice
- No warranty is provided - the code is offered "as is"

See the LICENSE file for the complete license text.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Material UI Documentation](https://mui.com/material-ui/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [pnpm Workspaces](https://pnpm.io/workspaces)
