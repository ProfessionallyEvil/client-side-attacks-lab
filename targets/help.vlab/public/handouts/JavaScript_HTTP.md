# JavaScript HTTP Requests

There are multiple ways of issuing HTTP requests and handling their responses in JavaScript. One way of handling the response is the use of _async_ and _await_ - but this is not consistently supported across common browsers yet, so we will not cover it in-depth at this time.

The other two common patterns for handling responses are _promises_ and _callbacks_. Promises are the more modern approach of the two, but in either case your JavaScript will ultimately be designating a function that will receive the response object upon completion of the request.

Let's look at a few ways of actually issuing requests:

### XMLHttpRequest (XHR)

The XMLHttpRequest is a vanilla JavaScript object type that has been around for along time, and has been the common underlying mechanism for AJAX (Asynchronous JavaScript and XML - typically a misnomer in modern apps) requests since they became largely standardized across browsers.

Here's how it's typically used:

```javascript
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

```

*The above example is taken directly from the Mozilla Developer Network (MDN) at https://developer.mozilla.org*

To include cookies and/or HTTP Basic auth headers, the instantiated XHR object, `oReq` in the above example, should have its `withCredentials` property set to `true`.

### fetch

The `fetch` API is a relatively young addition to modern browsers. It uses the promise pattern to set-up response handling. One advantage it confers is that it is typically much more concise than the XHR. The following is an example with `credentials` enabled, using an HTTP `POST` to send a JSON payload.

```javascript
fetch('https://mytargeturl.tld', {
   method: 'POST',
   credentials: 'include',
   body: JSON.stringify({username:'jdoe',password:'Spring2018'}),
   headers: {
        'Content-Type': 'application/json'
    }
}).then(function(res) {
    //handle response
})
```

Note that this example includes setting a number of options. A much more concise example would be the default `GET` method without any sort of payload or special options. An example of that is below:

```javascript
fetch('https://myserver/data').then(console.log)
```

Note that in this example, the `console.log` function is being supplied as the only handler for the promise, so it will simply execute and write the response object to the console.

### jQuery

jQuery is perhaps the most widely-used JavaScript library to date. It is primarily a library for simplifying DOM manipulation, which has been dwindling in relevance.  However, it also contains simplified functions that leverage the built-in `XMLHttpRequest` API to perform the same sort of asynchronous requests, while smoothing over many of the cross-browser issues that historically plagued developers using AJAX. It also has short-hand functions and global settings that can make it a very concise option, roughly equal to `fetch` but with vastly superior legacy browser support.

