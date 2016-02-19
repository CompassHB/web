# https://docs.docker.com/engine/examples/nodejs_web_app/
FROM    centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

COPY . /src

WORKDIR /src
RUN npm run build
RUN ls -al; less package.json

EXPOSE  8080
CMD ["npm", "start"]