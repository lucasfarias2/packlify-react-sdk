# Use Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Set environment variable for Node (Optional)
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
