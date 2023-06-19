FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]

# sha256:be1f53411db96a5f55f1ceaf8ad798