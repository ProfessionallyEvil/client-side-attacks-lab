# Awesome Client-Side Attacks
This is the the lab environment for teaching multi-host web-based attacks

**STATUS** - Work in progress

If you're here to grab the lab VM for Circle City Con 2018, the bad news is that it's not quite ready yet. I always try to get the labs out ~1 week before the class. This one is running behind schedule.

*However*, the technical elements are far enough along that you can test your system to make sure there won't be any issues running the final build.



## Doing a pre-class system test

The setup that I recommend is as follows:

1. On your host machine (i.e. directly on your laptop) make sure you have:

   - a code editor of your choice (I'll be demoing with [Atom](https://atom.io/) probably)
   - [Burp Suite](https://portswigger.net/burp) (the community edition is fine) - this is optional, but useful for inspecting traffic, and we can use it to setup hostname resolution for the lab VM. If you're not going to do this, you can temporarily put some entries in your Hosts file, as long as you have local admin on your machine.
   - Firefox and/or Chrome
     - If you're using Burp, I recommend the Foxy Proxy Standard add-on (available for both browsers) to simplify proxying just the traffic you want.
   - [Vagrant](https://www.vagrantup.com/) and [Virtualbox](https://www.virtualbox.org/) to host the lab
   - You need to support 64-bit virtualization, which on some laptops may require enabling in the BIOS. The is most commonly an issue with Lenovo laptops. https://www.howtogeek.com/213795/how-to-enable-intel-vt-x-in-your-computers-bios-or-uefi-firmware/

2. Clone this repo

3. From a command-line/powershell/terminal with Vagrant in the path, `cd` to the `vagrant` subdirectory of the project.

4. Run `vagrant up`

   - This will fetch the Debian base box and set everything up. Once the base box has been retrieved, it will take about 3-5 minutes (depending on internet speed) to fetch the rest of the stuff. 
   - You may be prompted for elevated privileges to set up the host-only virtual network adapter.

5. When the command completes successfully, one thing it does for your convenience is output its IP address. Look for the text:

   ```
       default: Host-only IP is on: 172.28.128.30
       default: --------------------------
       default: If you plan on accessing your targets through Burp Suite, get the config:
       default: http://172.28.128.30:3001/burpconf.json
       default: Alternatively, if you need host file entries, navigate to:
       default: http://172.28.128.30:3001/host_entries.txt
       default: ===========================
   ```

Note that **your** host-only IP will likely be different the one in the above example. Check that the `burpconf.json` or `host_entries.txt` is in fact being served on port 3001. Also, request test.txt on port 3007 of the same host, e.g. `http://172.28.128.30:3007/test.txt` for the above IP. This should print a _helloworld_ message from the file in the `/payloads` subdirectory of the project.

If those simple tests work, go back to the `/vagrant` subdirectory on the CLI and run `vagrant destroy` to trash the VM. Be sure to `git pull` the latest and run `vagrant up` again before class - I'm making Thursday at 7am the cut-off for any changes, so anytime after that should have the up-to-date class VM.



## There are errors!

If you encounter any errors in the form of the VM not coming up, or the items mentioned above being unavailable, either [DM me on Twitter](https://twitter.com/mic_wg) or open an issue here on Github.



## What if I can't/won't run Vagrant?

I will export an OVA and have it available on USB thumb drives at class. I recommend still going through the *Step 1* system check items above, minus the use the Vagrant.



## What if I use Hyper-V? It can't coexist with Virtualbox

If you can disable Hyper-V for the class, and use Virtualbox that would be the most reliable/best option. However, if you can't do that,  [DM me on Twitter](https://twitter.com/mic_wg) so that I can at least anticipate that problem. 