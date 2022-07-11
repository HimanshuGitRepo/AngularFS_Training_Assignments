FROM node

WORKDIR /myangularapp

COPY . .
RUN npm install -g http-server


EXPOSE 80
CMD ["http-server", "--port", "80"]
