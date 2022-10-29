FROM node:16

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /
RUN rm -rf /app
