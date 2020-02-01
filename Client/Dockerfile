FROM nginx:1.13.3-alpine
COPY /nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY dist/helpdeskAngular /usr/share/nginx/html



# Stage 1
#FROM node:13.7-alpine as node

#RUN mkdir -p /usr/src/app WORKDIR /usr/src/app

#COPY package.json /usr/src/app/ RUN npm install --dev && npm cache clean

#COPY . /usr/src/app

#RUN npm run build

# Stage 2
#FROM nginx:1.13.3-alpine

#COPY --from=node /usr/src/app/dist/helpdeskAngular /usr/share/nginx/html

#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf