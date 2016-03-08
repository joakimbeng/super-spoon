FROM mhart/alpine-node:4.3.2

RUN mkdir -p /usr/src/app
ADD package.json /usr/src/app
RUN npm install --production
ADD . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]

