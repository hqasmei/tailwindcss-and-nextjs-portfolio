# Use the official Node.js 14 image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the default Next.js development server port
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
