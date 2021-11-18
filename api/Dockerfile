FROM node:14.16.1

WORKDIR /app
EXPOSE 7500

COPY package.json ./
COPY yarn.lock ./

COPY . ./

CMD [ "yarn", "dev", "-L" ]