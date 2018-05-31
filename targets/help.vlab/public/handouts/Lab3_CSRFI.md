# Lab 3: CSRF - Barebones Proof of Concept

### Background

A CSRF exploit is essentially a blind attack, therefore it depends on the ability to mutate application state or data, or otherwise trigger events that are in sensitive if done without permission.



### Location

The `My Account` page in `www.weakco.vlab` has password change functionality. While there are a number of ways of protecting this transaction against CSRF, this application has failed to do so.



### Objective

 In this example, you will set up the basic functionality to steal an account through CSRF. This can be done with a simple HTML `form` and a submit button.

