FROM node:14-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:14-alpine AS production

WORKDIR /usr/src/app
	
COPY package*.json ./

RUN npm install --only=prod

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
