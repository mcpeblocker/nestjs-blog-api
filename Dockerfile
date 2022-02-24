FROM node:16-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

ARG PORT=5555
ENV PORT=${PORT}
EXPOSE ${PORT} 9229 9230

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . /app

RUN npm run build

CMD ["node", "dist/main"]

