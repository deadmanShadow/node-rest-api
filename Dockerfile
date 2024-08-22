# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./
# Or if you are using Yarn
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# Or if you are using Yarn
# RUN yarn install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
# Or if you are using Yarn
# CMD ["yarn", "start"]
