FROM node:alpine

WORKDIR /var/www

RUN npm install

CMD ["npm", "start"]