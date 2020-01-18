FROM node:12-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV HOST 0.0.0.0
EXPOSE 3000

COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile

ENV NODE_ENV production

COPY . /usr/src/app/

RUN yarn run build
CMD [ "yarn", "run", "start" ]
