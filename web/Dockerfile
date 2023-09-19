FROM node:18 as cloudbox-web

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]

