# JavaScript DOM Manipulation

## Getting an element

```javascript
document.getElementById('itemid'); // <div id="itemid">
document.getElementsByClassName('list-item'); // <div class="list-item even">
document.getElementsByTagName('div'); // <div>
document.getElementsByName('username'); // <input type="text" name="username">
```

Basic selectors are shown above. There are some more complex ones as well, using `document.querySelector`, but that's a bit nuanced for this class.

Note that only the *id* is required to be unique, therefore the others return an `HTMLElementCollection` even if there's only one match.  The individual HTML elements can be accessed with the `[zero-based-index]` syntax, just like a JavaScript array. For example, consider the following:

```html
<input type="text" name="username">
<input type="password" name="password">
```

 Assuming there are no other inputs on the form, the *password* input element could be accessed with:

```javascript
document.getElementsByTagName('input')[1];
```



## Navigating the Elements

Consider the following structure:

```html
<h1>
    Header
</h1>
<div class="list">
    <div class="item">
        Lorem ipsum text of some kind
        <div class="list">
            <div class="item">
                <input type="text" value="itemA">
            </div>
            <div class="item">
                Item 2 <!-- some dynamic number of elements, some with inputs, some without -->
            </div>
            <div class="item">
                <input type="text" value="itemC">
            </div>
        </div>
    </div>
    <div id="section2" class="item">
        Other text
        <div class="list">
            <div class="item">
                <input type="text" value="itemB"> <!-- This one is interesting -->
            </div>
            <div class="item">
                Item 2
            </div>
            <div class="item">
                Item 3
            </div>
        </div>
    </div>
</div>
```

Imagine that you want to get the first input in the second section. You could use `getElementsByTagName('input')[2]` like in the previous example, but imagine the lists are an unknown number of elements with potentially *n* inputs. 

There are multiple ways get a specific item. One way is drill-down with selectors, like this:

```javascript
document.getElementById('section2').getElementsByTagName('input')[0]
```

If you can imagine that *id* attribute isn't there, you might find a reliable element that you can actually *traverse* from, like this:

```javascript
document.getElementsByTagName('h1')[0].nextElementSibling.children[1].firstElementChild.firstElementChild.firstElementChild
```

In practice, there are a few considerations:

- What content is known to be subject to change, and what is not.

- What is the shortest (in terms of code characters) way of getting the element you want.

  

# HTML Elements

This is not a comprehensive list, by any stretch, but a small selection of elements of particular interest for attack purposes. In reality there are dozens of different HTML elements, each with many attributes. Some good *complete* references are [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML) and [W3Schools](https://www.w3schools.com/html/).



## div

```html
<div id="mydiv">
    Some other content.
    <div>
        Possibly including other elements
    </div>
    <table>
        <tr>
        	<td>Of</td>
            <td>Various</td>
            <td>Kinds</td>
        </tr>
    </table>
</div>
```

The `div` element doesn't really do anything on its own, but it's handy to wrap around other blocks of HTML for purposes like positioning or hiding/showing the enclosed content.

### Getting the contents

```javascript
document.getElementById('mydiv').innerHTML; //whole HTML content
document.getElementById('mydiv').innerText; //Text nodes only
```

### Making it disappear

```javascript
document.getElementById('mydiv').style.display = 'none';
document.getElementById('mydiv').style.display = ''; //bringing it back (assuming default inline display)

```

###Wrapping an element in a *div*

```javascript
var target = document.getElementById('targetElement');
target.insertAdjacentHTML('beforebegin', '<div id="mydiv"></div>');
var mydiv = document.getElementById('mydiv');
target.parentElement.removeChild(target);
mydiv.append(target);
```





## form, input, *and* button

```html
<form method="POST" action="/login/php">
    <input type="text" name="username" placeholder="jdoe@email.com">
    <input type="password" name="pwd">
    <input type="hidden" value="foo">
    <button type="submit">Login</button>
</form>
```

The `form` encases the actual form controls, and specifies the HTTP method and the target URL via the action. The `input` elements are among those that present textboxes or hidden fields. Their *value* attribute specifies their content. Finally, a `button` with the type attribute of *submit* will be automatically wired to submit the form that it's a child of.



> Exercise - Internet required:
>
> Only using HTML (no JS), create a form that presents a search box and search button. When the user clicks the button, the form should trigger a Google search for *Rick Astley*. For reference, the Google search URL is `https://www.google.com/search?q=searchterm`.



## iframe

```html
<iframe src="https://www.somepage.here"></iframe>
```

Acts as sort of like a page within a page. The *src* attribute can specify a URL. If it shares an origin with the parent, it can be possible to interact with it via JavaScript.

