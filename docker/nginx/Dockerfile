FROM nginx:latest
ARG TIMEZONE
ARG GITHUB_TOKEN
ARG NODE_VERSION
ARG NVM_DIR
ARG APP_PATH_IN_SERVER
ENV DEBIAN_FRONTEND noninteractive
LABEL maintainer="Tarun Jangra<tarun.jangra@hotmail.com>"

# Set timezone
RUN echo ${TIMEZONE} | tee /etc/timezone

ADD nginx.conf /etc/nginx/nginx.conf
ADD fastcgi.conf /etc/nginx/fastcgi.conf

COPY sites-enabled /etc/nginx/sites-enabled
COPY ssl /etc/nginx/ssl




