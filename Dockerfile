FROM node:10-alpine
copy . .
RUN npm install --production
RUN npm run build
CMD npm start
EXPOSE 3000
