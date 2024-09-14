# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy pnpm-lock.yaml in addition to package.json
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the app
RUN pnpm run build

# Production stage
FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm serve &&
    adduser -D appuser

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Copy package.json and pnpm-lock.yaml for potential script usage
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./

# Set non-root user
USER appuser

# Expose port 3000
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1))"

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
