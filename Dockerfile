FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
RUN npm install -g sonarqube-scanner
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
