# JavaScript Basics

The following provides basic syntax for most common JavaScript programmatic logic, functions, and variables.



## Operators

### Equality

`==` *Equality* - coercing - may be equal without matching type (e.g. `"1" == 1` returns true )

`===` *Equality* - non-coercing - type must match

`!=` *Non-equality* - coercing

`!==` *Non-equality* - non-coercing

###Comparison

`>`  *Greater than*

`<` *Less than*

`>=` *Greater than or equal to*

`<=` *Less than or equal to*

### Logic

`&&` *And*

`||` *Or*

`!` *Not*



###Mathematical

`+` *Addition*

`-` *Subtraction*

`*` *Multiplication*

`*` *Division*

`%` *Modulus*

`**` *Exponent*



## Data Types

**string** - zero to many characters together in  a specific order

```javascript
//Literal strings .. this is a comment, by the way
"this string"
'or this string'
`or this template literal`
```



**number** - any number, may include a sign (positive/negative) and/or decimal-point, in addition to digits

```javascript
//Literal numbers
5 //interget
5.0 //decimal
-43.6 //negative decimal
1E23 //scientific notation
```



**undefined** - a particular type, literally represented by the `undefined` keyword. This is also the default value for variables or properties that are undeclared



**boolean** - True or false value, literally `true` or `false`.



**function** - Executable chunk of code.

```javascript
//This is a named function declaration.
function add(a, b) {
    return a + b;
}

add(1, 3); //This is a function call. 

var sub = function(a, b) {
    return a - b;
} //This is an anonymous function declaration, assigned to variable.

let mult = (a, b) => { return a * b; } //this is an anonymous function declaration using the newer "arrow syntax"
```



**object** - The base type for pretty much anything else. Objects in javascript is basically just key/value structures, where the keys are strings and the values are any type.

```javascript
var myarray = [1, 2, 3]; //this array's type is object.
var thisisnull = null; //"null" is also of type object. Note that it's distinctly different from undefined.
var myobj = {
    color: "black",
    number: 8
} //this is a literal object definition.
```





## Flow Control

### if...else

```javascript
if(a === b) {
    return "equal";
} else if(a > b) {
    return "left side greater";
} else {
    return "right side greater"; 
}
```



### switch/case

```javascript
var flowerType = null;

switch(color) {
    case "red":
        flowerType = "roses";
        break;
    case "blue":
        flowerType = "violets";
        break;
    default:
        flowerType = "no flowers today";
}
```



### for loop

```javascript
for(var i=1; i<5; i++) {
    console.log(i);
}
//1
//2
//3
//4
```



> Exercise:
>
> Declare a function called *calculate* that takes three arguments: the first being a string representing the mathematical operation (add/subtract/multiply/divide), the second and third being values. The *calculate* function should return the result of applying the specified operation to the two values. 
>
> 
>
> example calls:
>
> ```javascript
> calculate("add", 3, 5); // 8
> 
> calculate("subtract", 3, 5); // -2
> ```



