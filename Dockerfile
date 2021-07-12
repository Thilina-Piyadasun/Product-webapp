# Step 1

FROM node:15-alpine

RUN mkdir -p /app

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
