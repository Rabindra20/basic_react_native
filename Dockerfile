FROM node:18

WORKDIR /usr/src/app
# RUN apt-get update 
# RUN useradd -m rab
# USER rab
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

USER rab

CMD [ "npm" , "start" ]