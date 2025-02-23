# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /Kaur_Jaspreet_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the project for production
RUN npm run build

# Expose port
EXPOSE 8083

# Start the server
CMD ["npx", "serve", "-s", "build", "-l", "8083"]
