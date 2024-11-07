FROM node:20 AS buildreact

WORKDIR /frontend-final/
COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build 

FROM nginx
COPY --from=buildreact /final-frontend/dist /usr/share/nginx/html