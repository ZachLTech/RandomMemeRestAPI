FROM node:latest

# Set the working directory inside the container
# WORKDIR /app

# Copy the built Nuxt.js app from the local machine to the container
COPY ./app /app

WORKDIR /app

# Install dependencies if needed
RUN npm install

# Expose port 3000
EXPOSE 3000

# Run the Nuxt.js app
CMD ["/bin/bash", "-c", "npx nuxt build;node .output/server/index.mjs"]