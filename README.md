# simple-password-strength

![npm (scoped)](https://img.shields.io/npm/v/simple-password-strength)

Get password strength in text/ color/ colored text or simple numerical score

## Installation

```
$ npm install simple-password-strength
```

## Usage

### Get password strength's text:

```js
const {strengthScoreText} = require("simple-password-strength");

const passwordStrengthText = strengthScoreText("Pass your password here!");
console.log(passwordStrengthText)
```

### Get password strength's color:

```js
const {strengthScoreColor} = require("simple-password-strength");

const passwordStrengthColor = strengthScoreColor("Pass your password here!");
console.log(passwordStrengthColor)
```

### Get password strength in colored text:

```js
const {strengthScoreTextWithColor} = require("simple-password-strength");

const passwordStrengthColoredText = strengthScoreTextWithColor("Pass your password here!");
console.log(passwordStrengthColoredText)
```

### Get password strength score:

```js
const {strengthScore} = require("simple-password-strength");

const passwordScore = strengthScore("Pass your password here!");
console.log(passwordScore)
```