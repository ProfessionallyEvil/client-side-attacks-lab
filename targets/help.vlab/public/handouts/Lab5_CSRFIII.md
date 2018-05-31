# Lab 5: CSRF - Multi-Stage Transactions

### Background

While HTTP is in-truth a stateless protocol, it is normal for applications to try to maintain some sort of state as part of their user experience. If you can imagine a two-stage action involving a simple confirmation step, consider how that might be implemented. For example, maybe an online storefront with your payment card on file allows you to purchase items, but it's two steps: one to add it to the card, one more to complete the purchase. If the state of that cart is maintained entirely on the server and/or in the session, and the confirmation does not require any parameters that are unknown to the attacker, then simply issuing multiple requests in sequence may be sufficient to complete the transaction, even blindly.



### Location

Look at the `Transfer` function in the `www.weakco.vlab` application.



### Objective

Build a proof-of-concept that issues two requests, in a way that is not obvious to the victim. The first should set up the transaction, and the second should trigger the confirmation.