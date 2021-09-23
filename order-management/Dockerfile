FROM node:14

WORKDIR /tmp
COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]