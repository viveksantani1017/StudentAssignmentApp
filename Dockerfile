FROM node:latest
WORKDIR /app/src
COPY . /app/src/
RUN npm install 
EXPOSE 8080
CMD 'npm start'