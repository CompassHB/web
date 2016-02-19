# https://docs.docker.com/engine/examples/nodejs_web_app/
FROM centos:centos7

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN yum install -y epel-release

# Install Node.js and npm
RUN yum install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

COPY . /src

WORKDIR /src
RUN npm run build
RUN ls -al; less package.json

# Load environment variables from S3 if production
RUN yum install -y python-pip
RUN pip install --upgrade awscli
ARG GET_ENV
RUN if [ "${GET_ENV}" == "S3" ]; then aws s3 cp s3://revival_secrets/www_prod_env /src/www_prod_env; source /src/www_prod_env; fi

EXPOSE  8080
CMD ["npm", "start"]