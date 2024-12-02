FROM node:23.1.0-alpine

WORKDIR /cache

COPY ./package.json ./package-lock.json ./
RUN npm install

WORKDIR /usr/local/app
ENV PATH /usr/local/app/node_modules/.bin:$PATH

COPY . .

EXPOSE 4200

ENTRYPOINT [ "./entrypoint.development.sh" ]