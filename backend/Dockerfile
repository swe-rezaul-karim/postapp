# Use lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install --frozen-lockfile

# Optional: Install nodemon globally if you're using it in dev mode
RUN yarn global add nodemon

# Copy source files
COPY . .

# Expose backend port (e.g., 4040)
EXPOSE 4040

# Default command (can be adjusted via docker-compose or k8s)
CMD ["yarn", "start"]