# Stage 1: Build the Angular application
FROM node:23.1.0-alpine AS build

WORKDIR /usr/local/app

# Copy package.json and install dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

# Copy the full application code and build
COPY ./frontend .
RUN npm run build

# Stage 2: Serve the Angular application with Nginx
FROM nginx:latest

# Copy custom Nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output from the previous stage
COPY --from=build /usr/local/app/dist/sakura-angular/browser /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]