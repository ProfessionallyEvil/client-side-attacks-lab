# Lab 6: CSRF with UI Redress

### Background

Multi-stage transactions may sometimes generate a transaction ID or other type of identifier in response to the initial request in the transaction. If subsequent requests require this value, a CSRF attack may not be viable. But if the interaction with the confirmation form is simply to click a button, a UI redress may overcome this particular hurdle.



### Location

The `Send by Email` function in the `www.weakco.vlab` application.



### Objective A

Make a copy of your proof of concept from **Lab 5** and modify it for the `Send by Email` function. Take note of what's different about this transaction, and how it affects the CSRF attempt.



### Objective B

Apply a UI redress to the confirmation page to make it something the user might want to click. Note that positioning may take a fair bit of trial and error.