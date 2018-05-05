FROM php:5.6.32-apache

RUN apt-get update && \
    apt-get clean

COPY gallery/api /var/www/html/
#COPY gallery /var/www/html/