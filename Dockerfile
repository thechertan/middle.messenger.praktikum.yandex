FROM node:18
WORKDIR /
COPY . .
EXPOSE 3000
CMD node -v
RUN npm i 
CMD npm run build