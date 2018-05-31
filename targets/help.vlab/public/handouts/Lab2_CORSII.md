# Lab 2: CORS - Origin Subdomain Reflection

### Background

This variant of CORS misconfiguration is reflecting just part of the origin into the `Access-Control-Allow-Origin` response header.  While it may succeed in limiting the attack platforms to a single domain, for example, this may still expose additional attack surface unnecessarily.



### Location

Examine the `GET api.weakco.vlab/admin/users` and `GET api.weakco.vlab/admin/companies` routes.  



### Objective

Set up a malicious link that is able to exploit this misconfiguration against an authenticated user to harvest data. Harvested data should be posted to the logs on `evilhacker.vlab`.



### Defensive Guidance on CORS

