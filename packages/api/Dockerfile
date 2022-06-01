
FROM node:18-alpine3.14

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package.json yarn.* ./

RUN apk add --no-cache git supervisor

COPY . /home/node/app/

RUN chown -R node:node /home/node

RUN yarn && node ace build

USER node

EXPOSE 8080

CMD supervisord -c /home/node/app/supervisor.conf
