# Lab 1: CORS - Arbitrary Origin Reflection

### Background

One of the most serious CORS misconfigurations is reflecting any arbitrary origin into the `Access-Control-Allow-Origin` response header.  This is particularly bad when combined with the `Access-Control-Allow-Credentials` response header, as it allows an attacker to use the victim's cookies or HTTP Basic auth if the victim is authenticated.



### Location

Examine the `api.weakco.vlab/v1` routes.  



### Objective

Set up a malicious page that presents static content to the viewer. While this content is being viewed, a background process should harvest as much data as possible from the vulnerable API and dump it to the `evilhacker.vlab` app logs.