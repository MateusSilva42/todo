FROM node:18.16.0
RUN curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g aws-cdk
COPY . .
CMD [ "cdk", "deploy" ]