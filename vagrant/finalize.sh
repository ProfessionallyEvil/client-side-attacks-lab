#/bin/bash

# Load all package dependencies
cd /home/vagrant/targets/evilhacker.vlab
yarn install && (setsid yarn start &)
cd /home/vagrant/targets/help.vlab
yarn install && (setsid yarn start &)
cd /home/vagrant/targets/www.weakco.vlab
yarn install && (setsid yarn start &)
cd /home/vagrant/targets/api.weakco.vlab
yarn install && (setsid yarn start &)

echo Waiting for targets to start && sleep 15 && echo Proceeding...

IPADDR="$(ip a | grep eth1 -A 2 | grep inet\ | cut -d " " -f 6 | cut -d "/" -f 1)"

bash /vagrant/generators/gen_burp_conf.sh $IPADDR > /home/vagrant/targets/help.vlab/public/burpconf.json

echo $IPADDR    www.weakco.vlab > /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    api.weakco.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    help.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    evilhacker.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    www.xn--wekco-hra.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt

echo --------------------------
echo Host-only IP is on: $IPADDR
echo --------------------------
echo The help page can be found at http://$IPADDR:3001
echo The *Lab Environment* section contains links to
echo Burp Suite config and hosts file entries, either of
echo which can be used on your host machine to setup
echo name resolution for the lab targets.
echo ===========================
