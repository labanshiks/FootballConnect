# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@10.4.0

# Copy the entire project to the working directory
COPY . .

ENV REACT_APP_API_BASE_URL = http://localhost:5000

# Expose port to the outside world
EXPOSE 3000

# Start client server when the container starts
CMD ["npm", "start"]