FROM node:20 AS buildreact

WORKDIR /finalapp/
COPY package.json ./
COPY package-lock.json ./

RUN npm install 

ENV VITE_API_URL=http://api.kfinal.duckdns.org
COPY . .

RUN npm run build 

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=buildreact /finalapp/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]