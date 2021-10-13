FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g rimraf

RUN npm install

COPY . .

CMD ["npm", "run start:debug"]

FROM node:14-alpine AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
