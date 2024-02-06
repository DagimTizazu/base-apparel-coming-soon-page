# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [Source](https://github.com/DagimTizazu/base-apparel-coming-soon-page)
- Live Site URL: [Live site](https://base-apparel-coming-soon-page-henna-six.vercel.app/)

## My process

### Built with

- JSX / Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [vite](https://vitejs.dev/) - Build tool

### What I learned

```css
/* remove annoying border when focusing on input and textarea*/
textarea:focus,
input:focus {
  outline: none;
}
```

```js
//regular expression to validate emails
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var emailValue = e.target.value;
setEmail(emailValue);

if (email.match(emailRegex)) {
  setMessage(true);
} else {
  setMessage(false);
}
```

## Author

- Frontend Mentor - [@DagimTizazu](https://www.frontendmentor.io/profile/DagimTizazu)
- Email address - dagimtizazu4444@gmail.com
- Telegram - @dag400
