FROM mysql/mysql-server:latest

WORKDIR /usr/src/sql

ENV MYSQL_ROOT_PASSWORD pass
ENV MYSQL_DATABASE schedule_eee

COPY schedule_eee.sql /docker-entrypoint-initdb.d/

COPY vaggm.sql /docker-entrypoint-initdb.d/

EXPOSE 3306