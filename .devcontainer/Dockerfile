# Checks image tags here: https://mcr.microsoft.com/v2/devcontainers/typescript-node/tags/list
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bullseye

# Install pnpm
RUN npm install -g pnpm@10.2.1

# Configure git
RUN git config --global init.defaultBranch main
RUN git config --global core.autocrlf input

# Set working directory
WORKDIR /workspace

# Set environment variables
ENV NODE_ENV=development
ENV SHELL=/bin/bash 