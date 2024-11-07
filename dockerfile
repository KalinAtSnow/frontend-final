FROM node:20 AS buildreact

WORKDIR /inventorymanagement/
COPY package.json ./
COPY package-lock.json ./

RUN npm install 

ENV VITE_API_URL=http://api.cardapp.duckdns.org
COPY . .

RUN npm run build 

FROM nginx
COPY --from=buildreact /inventorymanagement/dist /usr/share/nginx/html