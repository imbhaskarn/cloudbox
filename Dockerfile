FROM node:18
LABEL image.name="xweb"

WORKDIR /app

COPY ./web .
RUN
RUN yarn

RUN yarn build
