FROM node:18
RUN npm install yarn
RUN yarn
RUN mkdir /app
WORKDIR /app
COPY . /app
ENV AES_KEY AES_KEY
ENV IV_KEY IV_KEY
RUN yarn install
RUN yarn run build
RUN ls -a
EXPOSE ${APP_PORT}
CMD ["npm", "run", "start"]