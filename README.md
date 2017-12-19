## Introduction
This is a polyfill for the proposed `String` API `trimEnd` by [@sebmarkbage](https://github.com/sebmarkbage), [@evilpie](https://github.com/evilpie/) and [@ljharb](https://github.com/ljharb).

As the [proposal](https://github.com/tc39/proposal-string-left-right-trim) says this API will trim the whitespaces from a string just like the [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) function but only from the end of the string leaving any white space at the beginning. This is implemented by some browsers (like FireFox and Chrome) under the name [`trimRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight) which is not a standard API by the ECMA.

## Usage

You can use it with the help of npm, just type the following command:

```
npm install string.prototype.trimend
```

## Example

Here's a basic example for the usage of this API:

```javascript
var str = '   foo  ';
str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## How it work

This polyfill will fallback on the [`trimRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight) if it's found, since they're doing the same thing, and if not it will do a work around with the help of [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) function.

**Note**: for older browsers you need to polyfill [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim), I didn't do that because my target was browsers with the [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) support already since this API is going to take sometime to get accepted.

## License

This project is under the MIT License.