FROM node:alpine

WORKDIR '/app'

COPY ./package.json ./

RUN NPM INSTALL

COPY ./ ./

CMD ["NPM", "RUN", "BUILD"]