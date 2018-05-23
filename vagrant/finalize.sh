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

echo Waiting for targets to start && sleep 10 && echo Proceeding... 

IPADDR="$(ip a | grep eth1 -A 2 | grep inet\ | cut -d " " -f 6 | cut -d "/" -f 1)"

echo $IPADDR    www.weakco.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    api.weakco.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    help.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt
echo $IPADDR    evilhacker.vlab >> /home/vagrant/targets/help.vlab/public/host_entries.txt

echo --------------------------
echo Host-only IP is on: $IPADDR
echo --------------------------
echo If you need host file entries, navigate to:
echo http://$IPADDR:3001/host_entries.txt
