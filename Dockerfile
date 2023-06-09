From node:14.21.1
ENV PORT=3010

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3010
CMD ["sh", "-c", "MONGODB_URI=$MONGODB_URI npm start" ]