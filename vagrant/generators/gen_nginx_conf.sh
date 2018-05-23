#!/bin/sh

HOSTNAME=$1
LOCALPORT=$2

cat << EOF
server {
    listen 80;
    server_name $HOSTNAME;
    location / {
        proxy_pass http://localhost:$LOCALPORT;
    }
}

EOF
