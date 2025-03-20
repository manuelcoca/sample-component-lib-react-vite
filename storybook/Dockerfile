# Stage 1: Build Application
FROM node:22.9.0-bookworm-slim AS build-app

# Install pnpm globally
RUN npm install -g pnpm@latest

WORKDIR /app

# Copy workspace configuration
COPY pnpm-workspace.yaml ./
COPY package.json ./

# Copy required folders
COPY packages/icons/ ./packages/icons/
COPY packages/components/ ./packages/components/
COPY storybook/ ./storybook/

# Install all workspacedependencies
RUN pnpm install

# Build the components package
WORKDIR /app/packages/components
RUN pnpm build

# Build the icons package
WORKDIR /app/packages/icons
RUN pnpm build

# Build storybook
WORKDIR /app/storybook
RUN pnpm build

# Stage 2: Serve Application
FROM nginx:1.25.1-alpine AS final
COPY --from=build-app /app/storybook/dist /usr/share/nginx/html
COPY storybook/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]