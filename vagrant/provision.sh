#!/bin/bash

curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

sudo apt-get install -y nginx tmux vim

bash /vagrant/generators/gen_nginx_conf.sh help.vlab 3001 > /etc/nginx/sites-enabled/help.vlab
bash /vagrant/generators/gen_nginx_conf.sh api.weakco.vlab 3002 > /etc/nginx/sites-enabled/api.weakco.vlab
bash /vagrant/generators/gen_nginx_conf.sh www.weakco.vlab 3003 > /etc/nginx/sites-enabled/www.weakco.vlab
bash /vagrant/generators/gen_nginx_conf.sh evilhacker.vlab 3007 > /etc/nginx/sites-enabled/evilhacker.vlab

systemctl restart nginx
