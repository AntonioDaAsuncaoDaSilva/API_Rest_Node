FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install nodemon
RUN npm install mysql2
RUN npm install bcrypt
RUN npm install express-validator
RUN npm install jsonwebtoken




COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
