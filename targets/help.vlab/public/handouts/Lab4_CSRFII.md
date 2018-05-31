# Lab 4: CSRF - Attack Obfuscation

### Background

CSRF exploitation virtually always requires an element of social engineering. The victim needs to be directed to a page controlled by a the attacker. And while the payload may still be successfully delivered if it's not well hidden, this may also alert the victim that something has happened and prompt them to investigate and/or report it.



### Objective A

Modify the proof-of-concept from the previous lab to hide the signs of malicious activity and instead present something fairly innocuous.



### Objective B

As the attacker, you need the victim to be authenticated or your attack will not have a session to leverage. There's an open-redirect flaw on the `/login` form. Find it and use it to construct a malicious link that ensures your victim is authenticated upon arriving to your CSRF form.