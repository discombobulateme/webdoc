FROM node:14.10.1-alpine3.11

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public

ADD .browserslistrc .eslintrc.js .prettierignore .prettierrc babel.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]
