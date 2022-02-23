FROM node:15.13-alpine
WORKDIR /invoice-vue-test
COPY . .
RUN npm install
RUN npm run build
