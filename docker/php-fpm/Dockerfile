FROM ginvoicing/php-fpm:latest
ARG TIMEZONE
ARG GITHUB_TOKEN
ARG NODE_VERSION
ARG DOCKER_NVM_DIR
ARG APP_PATH_IN_SERVER
ENV DEBIAN_FRONTEND noninteractive
LABEL maintainer="Tarun Jangra<tarun.jangra@hotmail.com>"

# Set timezone
RUN echo ${TIMEZONE} | tee /etc/timezone

RUN docker-php-ext-install exif

