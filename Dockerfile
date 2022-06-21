FROM node:8.16.0
ARG ENV=prod
ENV ENV=${ENV}
WORKDIR /app
COPY ./ .
RUN npm install
CMD ["npm", "run", "dev"]
