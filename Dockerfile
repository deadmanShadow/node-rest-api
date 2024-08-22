# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Define environment variables for PostgreSQL
ENV PGUSER=postgres
ENV PGHOST=localhost
ENV PGDATABASE=students
ENV PGPASSWORD=shamil123
ENV PGPORT=5432

# Start the application
CMD ["node", "src/index.js"]
