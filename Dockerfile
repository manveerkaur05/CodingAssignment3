# Use an official Node runtime as a parent image compatible with Node 20
FROM node:20-alpine as build

# Set the working directory
WORKDIR /usr/src/app/lastName_firstName_ui_garden_build_checks

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Use nginx to serve the React app
FROM nginx:alpine
COPY --from=build /usr/src/app/lastName_firstName_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
