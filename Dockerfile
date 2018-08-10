FROM node:8.11.3-alpine
# RUN apk --update add postgresql-client && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm install --only=production

# Bundle app source
# COPY . .
# ADD src /usr/src/app/src

CMD [ "npm", "start" ]