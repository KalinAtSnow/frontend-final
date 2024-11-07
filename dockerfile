FROM node:20 AS buildreact

WORKDIR /finalapp/
COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build 

FROM nginx
COPY --from=buildreact /finalapp/dist /usr/share/nginx/html